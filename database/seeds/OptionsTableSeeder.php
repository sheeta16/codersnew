<?php

use Illuminate\Database\Seeder;
use App\Options;

class OptionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $options = [
            ['option' => '32066', 'type' => '99-custom', 'name' => 'Custom option 32066', 'price' => 900, 'hours' => 10, 'weight' => 1],
         	['option' => '32066', 'type' => '99-custom', 'name' => 'Custom option 32066', 'price' => 900, 'hours' => 10, 'weight' => 1],
         	['option' => '32066', 'type' => '99-custom', 'name' => 'Custom option 32066', 'price' => 900, 'hours' => 10, 'weight' => 1],
         	['option' => '32066', 'type' => '99-custom', 'name' => 'Custom option 32066', 'price' => 900, 'hours' => 10, 'weight' => 1],
         	['option' => '32066', 'type' => '99-custom', 'name' => 'Custom option 32066', 'price' => 900, 'hours' => 10, 'weight' => 1],           
        ];

        DB::table('options')->insert($options);
    }
}
