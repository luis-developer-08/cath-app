<?php

namespace Database\Seeders;

use App\Models\Year;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class YearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $years = ["1", "2", "3", "4"];

        foreach ($years as $year) {
            Year::create([
                'name' => $year,  // Assuming you have a 'name' column in your `years` table
            ]);
        }
    }
}
