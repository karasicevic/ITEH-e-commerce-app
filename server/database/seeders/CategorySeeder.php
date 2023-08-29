<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Računari i oprema'],
            ['name' => 'Gejming oprema'],
            ['name' => 'Multimedija'],
            ['name' => 'Telefoni'],
            ['name' => 'Električni trotineti'],
            ['name' => 'Mrežna oprema'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
