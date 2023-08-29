<?php

namespace Database\Seeders;

use App\Models\Order;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $orders = [
            [
                'user_id' => 1,
                'total_price' => 26500,
                'order_date' => now()->subDays(3),
            ],
            [
                'user_id' => 2,
                'total_price' => 26500,
                'order_date' => now()->subDays(3),
            ],
            [
                'user_id' => 3,
                'total_price' => 60500,
                'order_date' => now()->subDays(5),
            ],
        ];

        foreach ($orders as $order) {
            Order::create($order);
        }
    }
}
