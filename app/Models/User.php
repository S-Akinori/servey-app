<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'name',
    'company',
    'department',
    'start_date',
    'end_date',
    'email',
    'password',
    'role',
  ];

  /**
   * The attributes that should be hidden for serialization.
   *
   * @var array<int, string>
   */
  protected $hidden = [
    'password',
    'remember_token',
  ];

  /**
   * The attributes that should be cast.
   *
   * @var array<string, string>
   */
  protected $casts = [
    'email_verified_at' => 'datetime',
    'password' => 'hashed',
  ];

  public function clients()
  {
    return $this->hasMany(Client::class);
  }

  public function surveys()
  {
    return $this->hasMany(Survey::class);
  }
  public function userFormMetas()
  {
    return $this->hasMany(UserFormMeta::class);
  }
  public function userQuestionMetas()
  {
    return $this->hasMany(UserQuestionMeta::class);
  }
  public function isAdmin()
  {
    return $this->role === 'admin';
  }
}
