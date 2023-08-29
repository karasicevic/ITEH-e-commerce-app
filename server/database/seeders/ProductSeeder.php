<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Category;



class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $categories = Category::all();

        $products = [
            [
                'name' => 'HP laptop',
                'description' => 'HP 255 G8 DOS 15.6 Athlon 3050U 8GB 256GB 32P18EA',
                'price' => 25000,
                'category_id' => $categories->get(0)->id,
                'image'=>'https://www.exceed.rs/images/products/big/52247.jpg',
            ],
            [
                'name' => 'Marvo Gamepad',
                'description' => 'MARVO GT-006 USB Dual Shock ( 6771 )',
                'price' => 1500,
                'category_id' => $categories->get(1)->id,
                'image'=>'https://www.exceed.rs/images/products/big/15635.jpg',
            ],
            [
                'name' => 'GO pro kamera',
                'description' => 'GoPro Volta (battery, tripod, control, charger) APHGM-001-EU',
                'price' => 15500,
                'category_id' => $categories->get(2)->id,
                'image'=>'https://www.exceed.rs/images/products/big/54330.jpg',
            ],
            [
                'name' => 'Xiaomi telefon',
                'description' => 'Xiaomi Redmi A2 EU 3+64 Black',
                'price' => 25000,
                'category_id' => $categories->get(3)->id,
                'image'=>'https://www.exceed.rs/images/products/big/74254.jpg',
            ],
            [
                'name' => 'SENCOR električni trotinet',
                'description' => 'SENCOR SCOOTER ONE S20 električni trotinet',
                'price' => 45000,
                'category_id' => $categories->get(4)->id,
                'image'=>'https://www.exceed.rs/images/products/big/73243.jpg',
            ],
            [
                'name' => 'Mrežni konektor',
                'description' => 'E-GREEN RJ-45 mrežni konektor 88',
                'price' => 40,
                'category_id' => $categories->get(5)->id,
                'image'=>'https://www.exceed.rs/images/products/big/5407.jpg',
            ]
        ];

        
        Product::insert($products);
    }
}
