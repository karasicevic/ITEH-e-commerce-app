<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
   
    public function toArray($request)

    {
        $orderItems = [];
        $totalPrice = 0;
        foreach($this->orderItems as $orderItem) {
            $totalPrice += $orderItem->quantity*intval($orderItem->product->price);
            $orderItems[] = [
                'id' => $orderItem->id,
                'product_name' => $orderItem->product->name,
                'quantity' => $orderItem->quantity,
                'price' => intval($orderItem->product->price),
            ];
        }
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'total_price' => $totalPrice,
            'order_date' => $this->order_date,
            'order_items' => $orderItems,
        ];
    }
}
