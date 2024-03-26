<?php

namespace App\Providers;

use App\Interfaces\ConsultationRepositoryInterface;
use App\Repositories\ConsultationRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(ConsultationRepositoryInterface::class,ConsultationRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
