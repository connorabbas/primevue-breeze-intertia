<?php

namespace App\InventoryTransactions\Events;

use App\Models\InventoryTransactionBatch;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class InventoryBatchProcessed
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public InventoryTransactionBatch $batch
    ) {}
}
