<?php

namespace Database\Seeders;

use App\Models\Bachelor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BachelorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $bachelors = [
            "Bachelor of Science in Civil Engineering",
            "Bachelor of Technical Vocational Teacher Education",
            "Bachelor of Science in Architecture",
            "Bachelor of Science in Electrical Engineering",
            "Bachelor of Science in Midwifery",
            "Bachelor of Secondary Education",
            "Bachelor of Science in Psychology",
            "Master of Arts in Industrial Education - THE",
            "Bachelor of Science in Nursing",
            "Bachelor of Science in Industrial Technology",
            "BTLED",
            "Bachelor of Science",
        ];

        foreach ($bachelors as $bachelor) {
            Bachelor::create([
                'name' => $bachelor,  // Assuming you have a 'name' column in your `bachelors` table
            ]);
        }
    }
}
