<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bachelor;
use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Transaction;
use App\Models\Year;
use Box\Spout\Writer\Common\Creator\WriterEntityFactory;
use Box\Spout\Reader\Common\Creator\ReaderEntityFactory;

class TransactionCrudController extends Controller
{
    public function getAllTransactions(Request $request)
    {
        $query = $request->input('query');

        $transactions = Transaction::with(['student.year', 'student.bachelor'])
            ->where(function ($q) use ($query) {
                if ($query) {
                    $q->whereHas('student', function ($studentQuery) use ($query) {
                        $studentQuery->where('student_number', 'LIKE', "%{$query}%")
                            ->orWhere('first_name', 'LIKE', "%{$query}%")
                            ->orWhere('middle_name', 'LIKE', "%{$query}%")
                            ->orWhere('last_name', 'LIKE', "%{$query}%")
                            ->orWhere('contact_number', 'LIKE', "%{$query}%")
                            ->orWhere('email', 'LIKE', "%{$query}%");
                    })
                        ->orWhereHas('student.year', function ($yearQuery) use ($query) {
                            $yearQuery->where('name', 'LIKE', "%{$query}%");
                        })
                        ->orWhereHas('student.bachelor', function ($bachelorQuery) use ($query) {
                            $bachelorQuery->where('name', 'LIKE', "%{$query}%");
                        })
                        ->orWhere('loa_semester', 'LIKE', "%{$query}%")
                        ->orWhere('loa_year', 'LIKE', "%{$query}%")
                        ->orWhere('re_semester', 'LIKE', "%{$query}%")
                        ->orWhere('re_year', 'LIKE', "%{$query}%")
                        ->orWhere('reason', 'LIKE', "%{$query}%");
                }
            })
            ->paginate(20);

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
                'suffix' => 'nullable|string|max:255',
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
                    'suffix' => $validated['suffix'],
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
                'suffix' => 'nullable|string|max:255',
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
                'suffix' => $validated['suffix'],
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

        // CSV Header
        fputcsv($handle, [
            'Student Number',
            'Full Name',
            'Contact Number',
            'Email',
            'Year',
            'Degree',
            'Effectivity of LOA',
            'Returning Academic Year',
            'Reason'
        ]);

        foreach ($transactions as $transaction) {
            $student = $transaction->student;

            fputcsv($handle, [
                $student->student_number ?? '',
                trim(($student->first_name ?? '') . ' ' . ($student->middle_name ?? '') . ' ' . ($student->last_name ?? '') . ' ' . ($student->suffix ?? '')),
                $student->contact_number ?? '',
                $student->email ?? '',
                $student->year->name ?? '',
                $student->bachelor->name ?? '',
                trim(($transaction->loa_semester ?? '') . ', ' . ($transaction->loa_year ?? '')),
                trim(($transaction->re_semester ?? '') . ', ' . ($transaction->re_year ?? '')),
                $transaction->reason ?? ''
            ]);
        }

        fclose($handle);

        return response()->download($filename, 'transactions.csv', ['Content-Type' => 'text/csv']);
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

        // Add the header row
        $headerCells = [
            WriterEntityFactory::createCell('Student Number'),
            WriterEntityFactory::createCell('Full Name'),
            WriterEntityFactory::createCell('Contact Number'),
            WriterEntityFactory::createCell('Email'),
            WriterEntityFactory::createCell('Year'),
            WriterEntityFactory::createCell('Degree'),
            WriterEntityFactory::createCell('Effectivity of LOA'),
            WriterEntityFactory::createCell('Returning Academic Year'),
            WriterEntityFactory::createCell('Reason'),
        ];

        $writer->addRow(WriterEntityFactory::createRow($headerCells));

        // Add each transaction as a row
        foreach ($transactions as $transaction) {
            $student = $transaction->student;

            $rowCells = [
                WriterEntityFactory::createCell($student->student_number ?? ''),
                WriterEntityFactory::createCell(trim(($student->first_name ?? '') . ' ' . ($student->middle_name ?? '') . ' ' . ($student->last_name ?? '') . ' ' . ($student->suffix ?? ''))),
                WriterEntityFactory::createCell($student->contact_number ?? ''),
                WriterEntityFactory::createCell($student->email ?? ''),
                WriterEntityFactory::createCell($student->year->name ?? ''),
                WriterEntityFactory::createCell($student->bachelor->name ?? ''),
                WriterEntityFactory::createCell(trim(($transaction->loa_semester ?? '') . ', ' . ($transaction->loa_year ?? ''))),
                WriterEntityFactory::createCell(trim(($transaction->re_semester ?? '') . ', ' . ($transaction->re_year ?? ''))),
                WriterEntityFactory::createCell($transaction->reason ?? ''),
            ];

            $writer->addRow(WriterEntityFactory::createRow($rowCells));
        }

        // Close the writer (finalizes the file)
        $writer->close();

        // Return the response to download the file
        return response()->download($filename);
    }


    public function importCsv(Request $request)
    {
        try {
            $request->validate([
                'file' => 'required|mimes:csv,txt',
            ]);

            $file = $request->file('file');
            $filePath = $file->getRealPath();

            if (!file_exists($filePath) || !is_readable($filePath)) {
                return response()->json([
                    'message' => 'The file is not accessible',
                ], 400);
            }

            $handle = fopen($filePath, 'r');
            fgetcsv($handle); // Skip header

            while (($row = fgetcsv($handle)) !== false) {
                $row = array_pad($row, 8, null);

                // Process Name
                $nameParts = explode(',', strtolower(trim($row[0] ?? '')));
                $lastName = $nameParts[0] ?? null;
                $firstMiddleSuffix = $nameParts[1] ?? '';
                $firstMiddleParts = explode(' ', trim($firstMiddleSuffix));

                $firstName = $firstMiddleParts[0] ?? null;
                $middleName = count($firstMiddleParts) > 2 ? trim($firstMiddleParts[1]) : null;
                $suffix = in_array(end($firstMiddleParts), ['jr.', 'sr.', 'ii', 'iii', 'iv', 'v']) ? array_pop($firstMiddleParts) : null;

                // Process Student Data
                $studentId = trim(strtolower($row[1] ?? ''));
                $degreeProgram = trim(strtolower($row[2] ?? ''));
                $yearName = trim(strtolower($row[3] ?? ''));
                $contactNumber = trim(strtolower($row[4] ?? ''));
                $reason = trim(strtolower($row[5] ?? ''));

                // Process LOA and Returning Year
                $loaParts = explode(',', strtolower(trim($row[6] ?? '')));
                $loaSemester = isset($loaParts[0]) ? trim(str_replace('sem', '', $loaParts[0])) : null;
                $loaYear = $loaParts[1] ?? null;

                $returningParts = explode(',', strtolower(trim($row[7] ?? '')));
                $returningSemester = isset($returningParts[0]) ? trim(str_replace('sem', '', $returningParts[0])) : null;
                $returningYear = $returningParts[1] ?? null;

                // Fetch or Create Related Models
                $year = Year::whereRaw('LOWER(name) = ?', [$yearName])->first();
                $bachelor = Bachelor::whereRaw('LOWER(name) = ?', [$degreeProgram])->first();

                if (!$bachelor && $degreeProgram) {
                    $bachelor = Bachelor::create(['name' => ucfirst($degreeProgram)]);
                }

                // Insert Student Record
                $student = Student::firstOrCreate(
                    ['student_number' => $studentId],
                    [
                        'first_name' => $firstName,
                        'middle_name' => $middleName,
                        'last_name' => $lastName,
                        'suffix' => $suffix,
                        'contact_number' => $contactNumber,
                        'email' => null,
                        'year_id' => $year->id ?? null,
                        'bachelor_id' => $bachelor->id ?? null,
                    ]
                );

                // Insert Transaction Record
                Transaction::create([
                    'student_id' => $student->id,
                    'loa_semester' => $loaSemester,
                    'loa_year' => $loaYear,
                    're_semester' => $returningSemester,
                    're_year' => $returningYear,
                    'reason' => $reason,
                ]);
            }

            fclose($handle);

            return response()->json([
                'message' => 'CSV file processed and data imported successfully',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while processing the file',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
