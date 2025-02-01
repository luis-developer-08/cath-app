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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained('students'); // foreign key to the `students` table
            $table->string('loa_semester')->nullable();
            $table->string('loa_year')->nullable();
            $table->string('re_semester')->nullable();
            $table->string('re_year')->nullable();
            $table->text('reason')->nullable();
            $table->timestamps();
            $table->softDeletes(); // Add SoftDeletes column
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
