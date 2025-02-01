<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bachelor;
use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Transaction;
use App\Models\Year;
use Box\Spout\Writer\Common\Creator\WriterEntityFactory;
use Box\Spout\Common\Entity\Row;

class TransactionCrudController extends Controller
{
    public function getAllTransactions()
    {
        $transactions = Transaction::with('student.year', 'student.bachelor')->paginate(10);
        return response()->json($transactions);
    }

    public function getTransaction($id)
    {
        $transaction = Transaction::with('student.year', 'student.bachelor')->find($id);
        if (!$transaction) {
            return response()->json([
                'message' => 'Transaction not found'
            ], 404);
        }
        return response()->json($transaction);
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'studentNumber' => 'required|string|max:8',
                'fname' => 'required|string|max:255',
                'mname' => 'nullable|string|max:255',
                'lname' => 'required|string|max:255',
                'contact_number' => 'nullable|string|max:15',
                'email' => 'nullable|email|max:255',
                'year' => 'nullable|string',
                'bachelor' => 'nullable|string',
                'sem_eff_loa' => 'nullable|string',
                'year_eff_loa' => 'nullable|string',
                'sem_re' => 'nullable|string',
                'year_re' => 'nullable|string',
                'reason' => 'nullable|string',
            ]);

            // Check if the student already exists using the student number
            $year = Year::where('name', $validated['year'])->first();
            $bachelor = Bachelor::where('name', $validated['bachelor'])->first();


            $student = Student::firstOrCreate(
                ['student_number' => $validated['studentNumber']],
                [
                    'first_name' => $validated['fname'],
                    'middle_name' => $validated['mname'],
                    'last_name' => $validated['lname'],
                    'contact_number' => $validated['contact_number'],
                    'email' => $validated['email'],
                    'year_id' => $year->id, // Assuming you have a Year model to link the year
                    'bachelor_id' => $bachelor->id, // Assuming you have a Bachelor model to link the bachelor program
                ]
            );

            // Create the transaction
            $transaction = Transaction::create([
                'student_id' => $student->id,
                'loa_semester' => $validated['sem_eff_loa'],
                'loa_year' => $validated['year_eff_loa'],
                're_semester' => $validated['sem_re'],
                're_year' => $validated['year_re'],
                'reason' => $validated['reason'],
            ]);

            // Return a success response
            return response()->json([
                'message' => 'Transaction created successfully',
                'transaction' => $transaction,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function updateTransaction(Request $request, $transactionId)
    {
        try {
            $validated = $request->validate([
                'studentNumber' => 'required|string|max:8',
                'fname' => 'required|string|max:255',
                'mname' => 'nullable|string|max:255',
                'lname' => 'required|string|max:255',
                'contact_number' => 'nullable|string|max:15',
                'email' => 'nullable|email|max:255',
                'year' => 'nullable|string',
                'bachelor' => 'nullable|string',
                'sem_eff_loa' => 'nullable|string',
                'year_eff_loa' => 'nullable|string',
                'sem_re' => 'nullable|string',
                'year_re' => 'nullable|string',
                'reason' => 'nullable|string',
            ]);

            // return response()->json($validated);

            // Fetch year and bachelor program based on the provided names
            $year = Year::where('name', $validated['year'])->first();
            $bachelor = Bachelor::where('name', $validated['bachelor'])->first();

            if (!$year || !$bachelor) {
                return response()->json([
                    'message' => 'Invalid year or bachelor program',
                ], 400);
            }

            // Find the existing student and update their details


            // Find the transaction and update it
            $transaction = Transaction::find($transactionId);

            $student = Student::find($transaction->student_id)->first();

            if (!$student) {
                return response()->json([
                    'message' => 'Student not found',
                ], 404);
            }

            $student->update([
                'student_number' => $validated['studentNumber'],
                'first_name' => $validated['fname'],
                'middle_name' => $validated['mname'],
                'last_name' => $validated['lname'],
                'contact_number' => $validated['contact_number'],
                'email' => $validated['email'],
                'year_id' => $year->id,
                'bachelor_id' => $bachelor->id,
            ]);

            if (!$transaction) {
                return response()->json([
                    'message' => 'Transaction not found',
                ], 404);
            }

            $transaction->update([
                'loa_semester' => $validated['sem_eff_loa'],
                'loa_year' => $validated['year_eff_loa'],
                're_semester' => $validated['sem_re'],
                're_year' => $validated['year_re'],
                'reason' => $validated['reason'],
            ]);

            // Return a success response
            return response()->json([
                'message' => 'Transaction updated successfully',
                'transaction' => $transaction,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function deleteTransaction($transactionId)
    {
        $transaction = Transaction::find($transactionId);

        if (!$transaction) {
            return response()->json([
                'message' => 'Transaction not found',
            ], 404);
        }

        // Get the associated student before deleting the transaction
        $student = $transaction->student;

        // Delete the transaction first
        $transaction->delete();

        // Delete the student only if it exists
        if ($student) {
            $student->delete();
        }

        return response()->json([
            'message' => 'Transaction and associated Student deleted successfully',
        ]);
    }

    public function generateCsv()
    {
        $transactions = Transaction::with('student.year', 'student.bachelor')->get();
        $filename = 'transactions.csv';
        $handle = fopen($filename, 'w+');
        fputcsv($handle, array('Student Number', 'Full Name', 'Contact Number', 'Email', 'Year', 'Degree', 'Effectivity of LOA', 'Returning Academic Year', 'Reason'));

        foreach ($transactions as $transaction) {
            fputcsv($handle, array($transaction->student->student_number, $transaction->student->first_name . " " . $transaction->student->middle_name . " " . $transaction->student->last_name, $transaction->student->contact_number, $transaction->student->email, $transaction->student->year->name, $transaction->student->bachelor->name, $transaction->loa_semester . " " . $transaction->loa_year, $transaction->re_semester . " " . $transaction->re_year, $transaction->reason));
        }

        fclose($handle);

        $headers = array(
            'Content-Type' => 'text/csv',
        );

        return response()->download($filename, 'transactions.csv', $headers);
    }

    public function generateExcel()
    {
        // Fetch transactions with related student data
        $transactions = Transaction::with('student.year', 'student.bachelor')->get();

        // Create a writer instance for writing to an Excel file (XLSX format)
        $writer = WriterEntityFactory::createXLSXWriter();

        $filename = 'transactions.xlsx';

        // Open the file for writing
        $writer->openToFile($filename);

        // Add the header row using the WriterEntityFactory for creating cells
        $headerCells = [
            WriterEntityFactory::createCell('Student Number'),
            WriterEntityFactory::createCell('Full Name'),
            WriterEntityFactory::createCell('Contact Number'),
            WriterEntityFactory::createCell('Email'),
            WriterEntityFactory::createCell('Year'),
            WriterEntityFactory::createCell('Bachelor'),
            WriterEntityFactory::createCell('Effectivity of LOA'),
            WriterEntityFactory::createCell('Returning Academic Year'),
            WriterEntityFactory::createCell('Reason'),
        ];

        // Create the header row
        $headerRow = WriterEntityFactory::createRow($headerCells);
        $writer->addRow($headerRow);

        // Add each transaction as a row
        foreach ($transactions as $transaction) {
            $rowCells = [
                WriterEntityFactory::createCell($transaction->student->student_number),
                WriterEntityFactory::createCell($transaction->student->first_name . " " . $transaction->student->middle_name . " " . $transaction->student->last_name),
                WriterEntityFactory::createCell($transaction->student->contact_number),
                WriterEntityFactory::createCell($transaction->student->email),
                WriterEntityFactory::createCell($transaction->student->year->name),
                WriterEntityFactory::createCell($transaction->student->bachelor->name),
                WriterEntityFactory::createCell($transaction->loa_semester . " " . $transaction->loa_year),
                WriterEntityFactory::createCell($transaction->re_semester . " " . $transaction->re_year),
                WriterEntityFactory::createCell($transaction->reason),
            ];

            // Create a row with the transaction data
            $row = WriterEntityFactory::createRow($rowCells);
            $writer->addRow($row);
        }

        // Close the writer (finalizes the file)
        $writer->close();

        // Return the response to download the file
        return response()->download($filename);
    }
}
