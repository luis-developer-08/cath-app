<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('student_number');
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->string('contact_number')->nullable();
            $table->string('email')->nullable()->unique();
            $table->foreignId('year_id')->constrained('years')->nullable(); // foreign key to the `years` table
            $table->foreignId('bachelor_id')->constrained('bachelors')->nullable(); // foreign key to the `bachelors` table
            $table->timestamps();
            $table->softDeletes(); // Add SoftDeletes column
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
