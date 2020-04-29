<?php

use Illuminate\Database\Seeder;
use App\Users;

class UsersTableDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            ['firstname' => 'Admin', 'surname' => 'Admin', 'email' => 'admin@getnada.com', 'password' => Hash::make('123456'), 'role_id' => 1]
        ];

        DB::table('users')->insert($users);
    }
}
