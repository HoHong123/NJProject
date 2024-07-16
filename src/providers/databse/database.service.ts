import { Prisma, PrismaClient } from '@prisma/client';
import { ConsoleLogger, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';


@Injectable()
export class DatabaseService
    extends PrismaClient<Prisma.PrismaClientOptions, Prisma.LogLevel>
    implements OnModuleInit, OnModuleDestroy
{
    private logger = new ConsoleLogger("DB Service");

    constructor() {
        super({
            log: [
                {
                    emit: 'stdout', // Standard(Console) output
                    level: 'query'  // Query level
                },
                {
                    emit: 'stdout', // Standard(Console) output
                    level: 'info'   // Info level
                },
                {
                    emit: 'stdout', // Standard(Console) output
                    level: 'warn'  // Warning level
                },
                {
                    emit: 'stdout', // Standard(Console) output
                    level: 'error'  // Error level
                }
            ]
        })
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }

    async onModuleInit() {
        this.$on('error', (event) => {this.logger.error(event);});
        this.$on('warn',  (event) => {this.logger.warn(event);});
        this.$on('info',  (event) => {this.logger.verbose(event);});
        this.$on('query', (event) => {this.logger.log(event);});
        await this.$connect();
    }
    
    async disconnect() {
        await this.$disconnect();
    }
}
