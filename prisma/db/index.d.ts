
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model duckUser
 * 
 */
export type duckUser = $Result.DefaultSelection<Prisma.$duckUserPayload>
/**
 * Model inventory
 * 
 */
export type inventory = $Result.DefaultSelection<Prisma.$inventoryPayload>
/**
 * Model ducks
 * 
 */
export type ducks = $Result.DefaultSelection<Prisma.$ducksPayload>
/**
 * Model trade
 * 
 */
export type trade = $Result.DefaultSelection<Prisma.$tradePayload>
/**
 * Model receipt
 * 
 */
export type receipt = $Result.DefaultSelection<Prisma.$receiptPayload>
/**
 * Model auction
 * 
 */
export type auction = $Result.DefaultSelection<Prisma.$auctionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DuckUsers
 * const duckUsers = await prisma.duckUser.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DuckUsers
   * const duckUsers = await prisma.duckUser.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.duckUser`: Exposes CRUD operations for the **duckUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DuckUsers
    * const duckUsers = await prisma.duckUser.findMany()
    * ```
    */
  get duckUser(): Prisma.duckUserDelegate<ExtArgs>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.inventoryDelegate<ExtArgs>;

  /**
   * `prisma.ducks`: Exposes CRUD operations for the **ducks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ducks
    * const ducks = await prisma.ducks.findMany()
    * ```
    */
  get ducks(): Prisma.ducksDelegate<ExtArgs>;

  /**
   * `prisma.trade`: Exposes CRUD operations for the **trade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trades
    * const trades = await prisma.trade.findMany()
    * ```
    */
  get trade(): Prisma.tradeDelegate<ExtArgs>;

  /**
   * `prisma.receipt`: Exposes CRUD operations for the **receipt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receipts
    * const receipts = await prisma.receipt.findMany()
    * ```
    */
  get receipt(): Prisma.receiptDelegate<ExtArgs>;

  /**
   * `prisma.auction`: Exposes CRUD operations for the **auction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auctions
    * const auctions = await prisma.auction.findMany()
    * ```
    */
  get auction(): Prisma.auctionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.16.2
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    duckUser: 'duckUser',
    inventory: 'inventory',
    ducks: 'ducks',
    trade: 'trade',
    receipt: 'receipt',
    auction: 'auction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "duckUser" | "inventory" | "ducks" | "trade" | "receipt" | "auction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      duckUser: {
        payload: Prisma.$duckUserPayload<ExtArgs>
        fields: Prisma.duckUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.duckUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duckUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.duckUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duckUserPayload>
          }
          findFirst: {
            args: Prisma.duckUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duckUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.duckUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duckUserPayload>
          }
          findMany: {
            args: Prisma.duckUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duckUserPayload>[]
          }
          create: {
            args: Prisma.duckUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duckUserPayload>
          }
          createMany: {
            args: Prisma.duckUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.duckUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duckUserPayload>[]
          }
          delete: {
            args: Prisma.duckUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duckUserPayload>
          }
          update: {
            args: Prisma.duckUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duckUserPayload>
          }
          deleteMany: {
            args: Prisma.duckUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.duckUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.duckUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duckUserPayload>
          }
          aggregate: {
            args: Prisma.DuckUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDuckUser>
          }
          groupBy: {
            args: Prisma.duckUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<DuckUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.duckUserCountArgs<ExtArgs>
            result: $Utils.Optional<DuckUserCountAggregateOutputType> | number
          }
        }
      }
      inventory: {
        payload: Prisma.$inventoryPayload<ExtArgs>
        fields: Prisma.inventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findFirst: {
            args: Prisma.inventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findMany: {
            args: Prisma.inventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          create: {
            args: Prisma.inventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          createMany: {
            args: Prisma.inventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          delete: {
            args: Prisma.inventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          update: {
            args: Prisma.inventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          deleteMany: {
            args: Prisma.inventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.inventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.inventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      ducks: {
        payload: Prisma.$ducksPayload<ExtArgs>
        fields: Prisma.ducksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ducksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ducksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ducksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ducksPayload>
          }
          findFirst: {
            args: Prisma.ducksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ducksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ducksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ducksPayload>
          }
          findMany: {
            args: Prisma.ducksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ducksPayload>[]
          }
          create: {
            args: Prisma.ducksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ducksPayload>
          }
          createMany: {
            args: Prisma.ducksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ducksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ducksPayload>[]
          }
          delete: {
            args: Prisma.ducksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ducksPayload>
          }
          update: {
            args: Prisma.ducksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ducksPayload>
          }
          deleteMany: {
            args: Prisma.ducksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ducksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ducksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ducksPayload>
          }
          aggregate: {
            args: Prisma.DucksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDucks>
          }
          groupBy: {
            args: Prisma.ducksGroupByArgs<ExtArgs>
            result: $Utils.Optional<DucksGroupByOutputType>[]
          }
          count: {
            args: Prisma.ducksCountArgs<ExtArgs>
            result: $Utils.Optional<DucksCountAggregateOutputType> | number
          }
        }
      }
      trade: {
        payload: Prisma.$tradePayload<ExtArgs>
        fields: Prisma.tradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradePayload>
          }
          findFirst: {
            args: Prisma.tradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradePayload>
          }
          findMany: {
            args: Prisma.tradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradePayload>[]
          }
          create: {
            args: Prisma.tradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradePayload>
          }
          createMany: {
            args: Prisma.tradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradePayload>[]
          }
          delete: {
            args: Prisma.tradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradePayload>
          }
          update: {
            args: Prisma.tradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradePayload>
          }
          deleteMany: {
            args: Prisma.tradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradePayload>
          }
          aggregate: {
            args: Prisma.TradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrade>
          }
          groupBy: {
            args: Prisma.tradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.tradeCountArgs<ExtArgs>
            result: $Utils.Optional<TradeCountAggregateOutputType> | number
          }
        }
      }
      receipt: {
        payload: Prisma.$receiptPayload<ExtArgs>
        fields: Prisma.receiptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.receiptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.receiptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          findFirst: {
            args: Prisma.receiptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.receiptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          findMany: {
            args: Prisma.receiptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>[]
          }
          create: {
            args: Prisma.receiptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          createMany: {
            args: Prisma.receiptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.receiptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>[]
          }
          delete: {
            args: Prisma.receiptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          update: {
            args: Prisma.receiptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          deleteMany: {
            args: Prisma.receiptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.receiptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.receiptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          aggregate: {
            args: Prisma.ReceiptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceipt>
          }
          groupBy: {
            args: Prisma.receiptGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceiptGroupByOutputType>[]
          }
          count: {
            args: Prisma.receiptCountArgs<ExtArgs>
            result: $Utils.Optional<ReceiptCountAggregateOutputType> | number
          }
        }
      }
      auction: {
        payload: Prisma.$auctionPayload<ExtArgs>
        fields: Prisma.auctionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auctionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auctionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auctionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auctionPayload>
          }
          findFirst: {
            args: Prisma.auctionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auctionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auctionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auctionPayload>
          }
          findMany: {
            args: Prisma.auctionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auctionPayload>[]
          }
          create: {
            args: Prisma.auctionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auctionPayload>
          }
          createMany: {
            args: Prisma.auctionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.auctionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auctionPayload>[]
          }
          delete: {
            args: Prisma.auctionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auctionPayload>
          }
          update: {
            args: Prisma.auctionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auctionPayload>
          }
          deleteMany: {
            args: Prisma.auctionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auctionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.auctionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auctionPayload>
          }
          aggregate: {
            args: Prisma.AuctionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuction>
          }
          groupBy: {
            args: Prisma.auctionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuctionGroupByOutputType>[]
          }
          count: {
            args: Prisma.auctionCountArgs<ExtArgs>
            result: $Utils.Optional<AuctionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model duckUser
   */

  export type AggregateDuckUser = {
    _count: DuckUserCountAggregateOutputType | null
    _avg: DuckUserAvgAggregateOutputType | null
    _sum: DuckUserSumAggregateOutputType | null
    _min: DuckUserMinAggregateOutputType | null
    _max: DuckUserMaxAggregateOutputType | null
  }

  export type DuckUserAvgAggregateOutputType = {
    id: number | null
  }

  export type DuckUserSumAggregateOutputType = {
    id: bigint | null
  }

  export type DuckUserMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
    name: string | null
    email: string | null
    password: string | null
    isDeleted: boolean | null
  }

  export type DuckUserMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
    name: string | null
    email: string | null
    password: string | null
    isDeleted: boolean | null
  }

  export type DuckUserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    lastLogin: number
    name: number
    email: number
    password: number
    isDeleted: number
    _all: number
  }


  export type DuckUserAvgAggregateInputType = {
    id?: true
  }

  export type DuckUserSumAggregateInputType = {
    id?: true
  }

  export type DuckUserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    name?: true
    email?: true
    password?: true
    isDeleted?: true
  }

  export type DuckUserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    name?: true
    email?: true
    password?: true
    isDeleted?: true
  }

  export type DuckUserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    name?: true
    email?: true
    password?: true
    isDeleted?: true
    _all?: true
  }

  export type DuckUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which duckUser to aggregate.
     */
    where?: duckUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of duckUsers to fetch.
     */
    orderBy?: duckUserOrderByWithRelationInput | duckUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: duckUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` duckUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` duckUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned duckUsers
    **/
    _count?: true | DuckUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DuckUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DuckUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DuckUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DuckUserMaxAggregateInputType
  }

  export type GetDuckUserAggregateType<T extends DuckUserAggregateArgs> = {
        [P in keyof T & keyof AggregateDuckUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDuckUser[P]>
      : GetScalarType<T[P], AggregateDuckUser[P]>
  }




  export type duckUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: duckUserWhereInput
    orderBy?: duckUserOrderByWithAggregationInput | duckUserOrderByWithAggregationInput[]
    by: DuckUserScalarFieldEnum[] | DuckUserScalarFieldEnum
    having?: duckUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DuckUserCountAggregateInputType | true
    _avg?: DuckUserAvgAggregateInputType
    _sum?: DuckUserSumAggregateInputType
    _min?: DuckUserMinAggregateInputType
    _max?: DuckUserMaxAggregateInputType
  }

  export type DuckUserGroupByOutputType = {
    id: bigint
    createdAt: Date
    updatedAt: Date
    lastLogin: Date
    name: string
    email: string
    password: string
    isDeleted: boolean
    _count: DuckUserCountAggregateOutputType | null
    _avg: DuckUserAvgAggregateOutputType | null
    _sum: DuckUserSumAggregateOutputType | null
    _min: DuckUserMinAggregateOutputType | null
    _max: DuckUserMaxAggregateOutputType | null
  }

  type GetDuckUserGroupByPayload<T extends duckUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DuckUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DuckUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DuckUserGroupByOutputType[P]>
            : GetScalarType<T[P], DuckUserGroupByOutputType[P]>
        }
      >
    >


  export type duckUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["duckUser"]>

  export type duckUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["duckUser"]>

  export type duckUserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isDeleted?: boolean
  }


  export type $duckUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "duckUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      updatedAt: Date
      lastLogin: Date
      name: string
      email: string
      password: string
      isDeleted: boolean
    }, ExtArgs["result"]["duckUser"]>
    composites: {}
  }

  type duckUserGetPayload<S extends boolean | null | undefined | duckUserDefaultArgs> = $Result.GetResult<Prisma.$duckUserPayload, S>

  type duckUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<duckUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DuckUserCountAggregateInputType | true
    }

  export interface duckUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['duckUser'], meta: { name: 'duckUser' } }
    /**
     * Find zero or one DuckUser that matches the filter.
     * @param {duckUserFindUniqueArgs} args - Arguments to find a DuckUser
     * @example
     * // Get one DuckUser
     * const duckUser = await prisma.duckUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends duckUserFindUniqueArgs>(args: SelectSubset<T, duckUserFindUniqueArgs<ExtArgs>>): Prisma__duckUserClient<$Result.GetResult<Prisma.$duckUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DuckUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {duckUserFindUniqueOrThrowArgs} args - Arguments to find a DuckUser
     * @example
     * // Get one DuckUser
     * const duckUser = await prisma.duckUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends duckUserFindUniqueOrThrowArgs>(args: SelectSubset<T, duckUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__duckUserClient<$Result.GetResult<Prisma.$duckUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DuckUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duckUserFindFirstArgs} args - Arguments to find a DuckUser
     * @example
     * // Get one DuckUser
     * const duckUser = await prisma.duckUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends duckUserFindFirstArgs>(args?: SelectSubset<T, duckUserFindFirstArgs<ExtArgs>>): Prisma__duckUserClient<$Result.GetResult<Prisma.$duckUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DuckUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duckUserFindFirstOrThrowArgs} args - Arguments to find a DuckUser
     * @example
     * // Get one DuckUser
     * const duckUser = await prisma.duckUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends duckUserFindFirstOrThrowArgs>(args?: SelectSubset<T, duckUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__duckUserClient<$Result.GetResult<Prisma.$duckUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DuckUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duckUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DuckUsers
     * const duckUsers = await prisma.duckUser.findMany()
     * 
     * // Get first 10 DuckUsers
     * const duckUsers = await prisma.duckUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const duckUserWithIdOnly = await prisma.duckUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends duckUserFindManyArgs>(args?: SelectSubset<T, duckUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$duckUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DuckUser.
     * @param {duckUserCreateArgs} args - Arguments to create a DuckUser.
     * @example
     * // Create one DuckUser
     * const DuckUser = await prisma.duckUser.create({
     *   data: {
     *     // ... data to create a DuckUser
     *   }
     * })
     * 
     */
    create<T extends duckUserCreateArgs>(args: SelectSubset<T, duckUserCreateArgs<ExtArgs>>): Prisma__duckUserClient<$Result.GetResult<Prisma.$duckUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DuckUsers.
     * @param {duckUserCreateManyArgs} args - Arguments to create many DuckUsers.
     * @example
     * // Create many DuckUsers
     * const duckUser = await prisma.duckUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends duckUserCreateManyArgs>(args?: SelectSubset<T, duckUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DuckUsers and returns the data saved in the database.
     * @param {duckUserCreateManyAndReturnArgs} args - Arguments to create many DuckUsers.
     * @example
     * // Create many DuckUsers
     * const duckUser = await prisma.duckUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DuckUsers and only return the `id`
     * const duckUserWithIdOnly = await prisma.duckUser.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends duckUserCreateManyAndReturnArgs>(args?: SelectSubset<T, duckUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$duckUserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DuckUser.
     * @param {duckUserDeleteArgs} args - Arguments to delete one DuckUser.
     * @example
     * // Delete one DuckUser
     * const DuckUser = await prisma.duckUser.delete({
     *   where: {
     *     // ... filter to delete one DuckUser
     *   }
     * })
     * 
     */
    delete<T extends duckUserDeleteArgs>(args: SelectSubset<T, duckUserDeleteArgs<ExtArgs>>): Prisma__duckUserClient<$Result.GetResult<Prisma.$duckUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DuckUser.
     * @param {duckUserUpdateArgs} args - Arguments to update one DuckUser.
     * @example
     * // Update one DuckUser
     * const duckUser = await prisma.duckUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends duckUserUpdateArgs>(args: SelectSubset<T, duckUserUpdateArgs<ExtArgs>>): Prisma__duckUserClient<$Result.GetResult<Prisma.$duckUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DuckUsers.
     * @param {duckUserDeleteManyArgs} args - Arguments to filter DuckUsers to delete.
     * @example
     * // Delete a few DuckUsers
     * const { count } = await prisma.duckUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends duckUserDeleteManyArgs>(args?: SelectSubset<T, duckUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DuckUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duckUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DuckUsers
     * const duckUser = await prisma.duckUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends duckUserUpdateManyArgs>(args: SelectSubset<T, duckUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DuckUser.
     * @param {duckUserUpsertArgs} args - Arguments to update or create a DuckUser.
     * @example
     * // Update or create a DuckUser
     * const duckUser = await prisma.duckUser.upsert({
     *   create: {
     *     // ... data to create a DuckUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DuckUser we want to update
     *   }
     * })
     */
    upsert<T extends duckUserUpsertArgs>(args: SelectSubset<T, duckUserUpsertArgs<ExtArgs>>): Prisma__duckUserClient<$Result.GetResult<Prisma.$duckUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DuckUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duckUserCountArgs} args - Arguments to filter DuckUsers to count.
     * @example
     * // Count the number of DuckUsers
     * const count = await prisma.duckUser.count({
     *   where: {
     *     // ... the filter for the DuckUsers we want to count
     *   }
     * })
    **/
    count<T extends duckUserCountArgs>(
      args?: Subset<T, duckUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DuckUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DuckUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DuckUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DuckUserAggregateArgs>(args: Subset<T, DuckUserAggregateArgs>): Prisma.PrismaPromise<GetDuckUserAggregateType<T>>

    /**
     * Group by DuckUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duckUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends duckUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: duckUserGroupByArgs['orderBy'] }
        : { orderBy?: duckUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, duckUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDuckUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the duckUser model
   */
  readonly fields: duckUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for duckUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__duckUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the duckUser model
   */ 
  interface duckUserFieldRefs {
    readonly id: FieldRef<"duckUser", 'BigInt'>
    readonly createdAt: FieldRef<"duckUser", 'DateTime'>
    readonly updatedAt: FieldRef<"duckUser", 'DateTime'>
    readonly lastLogin: FieldRef<"duckUser", 'DateTime'>
    readonly name: FieldRef<"duckUser", 'String'>
    readonly email: FieldRef<"duckUser", 'String'>
    readonly password: FieldRef<"duckUser", 'String'>
    readonly isDeleted: FieldRef<"duckUser", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * duckUser findUnique
   */
  export type duckUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duckUser
     */
    select?: duckUserSelect<ExtArgs> | null
    /**
     * Filter, which duckUser to fetch.
     */
    where: duckUserWhereUniqueInput
  }

  /**
   * duckUser findUniqueOrThrow
   */
  export type duckUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duckUser
     */
    select?: duckUserSelect<ExtArgs> | null
    /**
     * Filter, which duckUser to fetch.
     */
    where: duckUserWhereUniqueInput
  }

  /**
   * duckUser findFirst
   */
  export type duckUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duckUser
     */
    select?: duckUserSelect<ExtArgs> | null
    /**
     * Filter, which duckUser to fetch.
     */
    where?: duckUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of duckUsers to fetch.
     */
    orderBy?: duckUserOrderByWithRelationInput | duckUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for duckUsers.
     */
    cursor?: duckUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` duckUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` duckUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of duckUsers.
     */
    distinct?: DuckUserScalarFieldEnum | DuckUserScalarFieldEnum[]
  }

  /**
   * duckUser findFirstOrThrow
   */
  export type duckUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duckUser
     */
    select?: duckUserSelect<ExtArgs> | null
    /**
     * Filter, which duckUser to fetch.
     */
    where?: duckUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of duckUsers to fetch.
     */
    orderBy?: duckUserOrderByWithRelationInput | duckUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for duckUsers.
     */
    cursor?: duckUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` duckUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` duckUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of duckUsers.
     */
    distinct?: DuckUserScalarFieldEnum | DuckUserScalarFieldEnum[]
  }

  /**
   * duckUser findMany
   */
  export type duckUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duckUser
     */
    select?: duckUserSelect<ExtArgs> | null
    /**
     * Filter, which duckUsers to fetch.
     */
    where?: duckUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of duckUsers to fetch.
     */
    orderBy?: duckUserOrderByWithRelationInput | duckUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing duckUsers.
     */
    cursor?: duckUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` duckUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` duckUsers.
     */
    skip?: number
    distinct?: DuckUserScalarFieldEnum | DuckUserScalarFieldEnum[]
  }

  /**
   * duckUser create
   */
  export type duckUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duckUser
     */
    select?: duckUserSelect<ExtArgs> | null
    /**
     * The data needed to create a duckUser.
     */
    data?: XOR<duckUserCreateInput, duckUserUncheckedCreateInput>
  }

  /**
   * duckUser createMany
   */
  export type duckUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many duckUsers.
     */
    data: duckUserCreateManyInput | duckUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * duckUser createManyAndReturn
   */
  export type duckUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duckUser
     */
    select?: duckUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many duckUsers.
     */
    data: duckUserCreateManyInput | duckUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * duckUser update
   */
  export type duckUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duckUser
     */
    select?: duckUserSelect<ExtArgs> | null
    /**
     * The data needed to update a duckUser.
     */
    data: XOR<duckUserUpdateInput, duckUserUncheckedUpdateInput>
    /**
     * Choose, which duckUser to update.
     */
    where: duckUserWhereUniqueInput
  }

  /**
   * duckUser updateMany
   */
  export type duckUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update duckUsers.
     */
    data: XOR<duckUserUpdateManyMutationInput, duckUserUncheckedUpdateManyInput>
    /**
     * Filter which duckUsers to update
     */
    where?: duckUserWhereInput
  }

  /**
   * duckUser upsert
   */
  export type duckUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duckUser
     */
    select?: duckUserSelect<ExtArgs> | null
    /**
     * The filter to search for the duckUser to update in case it exists.
     */
    where: duckUserWhereUniqueInput
    /**
     * In case the duckUser found by the `where` argument doesn't exist, create a new duckUser with this data.
     */
    create: XOR<duckUserCreateInput, duckUserUncheckedCreateInput>
    /**
     * In case the duckUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<duckUserUpdateInput, duckUserUncheckedUpdateInput>
  }

  /**
   * duckUser delete
   */
  export type duckUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duckUser
     */
    select?: duckUserSelect<ExtArgs> | null
    /**
     * Filter which duckUser to delete.
     */
    where: duckUserWhereUniqueInput
  }

  /**
   * duckUser deleteMany
   */
  export type duckUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which duckUsers to delete
     */
    where?: duckUserWhereInput
  }

  /**
   * duckUser without action
   */
  export type duckUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duckUser
     */
    select?: duckUserSelect<ExtArgs> | null
  }


  /**
   * Model inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    slotSize: number | null
    level: number | null
  }

  export type InventorySumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    slotSize: number | null
    level: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: bigint | null
    slotSize: number | null
    level: number | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: bigint | null
    slotSize: number | null
    level: number | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    slotSize: number
    level: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    id?: true
    userId?: true
    slotSize?: true
    level?: true
  }

  export type InventorySumAggregateInputType = {
    id?: true
    userId?: true
    slotSize?: true
    level?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    slotSize?: true
    level?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    slotSize?: true
    level?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    slotSize?: true
    level?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory to aggregate.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type inventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput
    orderBy?: inventoryOrderByWithAggregationInput | inventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: inventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: bigint
    createdAt: Date
    updatedAt: Date
    userId: bigint
    slotSize: number
    level: number
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    slotSize?: boolean
    level?: boolean
  }, ExtArgs["result"]["inventory"]>

  export type inventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    slotSize?: boolean
    level?: boolean
  }, ExtArgs["result"]["inventory"]>

  export type inventorySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    slotSize?: boolean
    level?: boolean
  }


  export type $inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      updatedAt: Date
      userId: bigint
      slotSize: number
      level: number
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type inventoryGetPayload<S extends boolean | null | undefined | inventoryDefaultArgs> = $Result.GetResult<Prisma.$inventoryPayload, S>

  type inventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<inventoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface inventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory'], meta: { name: 'inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {inventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventoryFindUniqueArgs>(args: SelectSubset<T, inventoryFindUniqueArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {inventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, inventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventoryFindFirstArgs>(args?: SelectSubset<T, inventoryFindFirstArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, inventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inventoryFindManyArgs>(args?: SelectSubset<T, inventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Inventory.
     * @param {inventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends inventoryCreateArgs>(args: SelectSubset<T, inventoryCreateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Inventories.
     * @param {inventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventoryCreateManyArgs>(args?: SelectSubset<T, inventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {inventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, inventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Inventory.
     * @param {inventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends inventoryDeleteArgs>(args: SelectSubset<T, inventoryDeleteArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Inventory.
     * @param {inventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventoryUpdateArgs>(args: SelectSubset<T, inventoryUpdateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Inventories.
     * @param {inventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventoryDeleteManyArgs>(args?: SelectSubset<T, inventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventoryUpdateManyArgs>(args: SelectSubset<T, inventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory.
     * @param {inventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends inventoryUpsertArgs>(args: SelectSubset<T, inventoryUpsertArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends inventoryCountArgs>(
      args?: Subset<T, inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventoryGroupByArgs['orderBy'] }
        : { orderBy?: inventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventory model
   */
  readonly fields: inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inventory model
   */ 
  interface inventoryFieldRefs {
    readonly id: FieldRef<"inventory", 'BigInt'>
    readonly createdAt: FieldRef<"inventory", 'DateTime'>
    readonly updatedAt: FieldRef<"inventory", 'DateTime'>
    readonly userId: FieldRef<"inventory", 'BigInt'>
    readonly slotSize: FieldRef<"inventory", 'Int'>
    readonly level: FieldRef<"inventory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * inventory findUnique
   */
  export type inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findUniqueOrThrow
   */
  export type inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findFirst
   */
  export type inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findFirstOrThrow
   */
  export type inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findMany
   */
  export type inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory create
   */
  export type inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * The data needed to create a inventory.
     */
    data: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
  }

  /**
   * inventory createMany
   */
  export type inventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventory createManyAndReturn
   */
  export type inventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventory update
   */
  export type inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * The data needed to update a inventory.
     */
    data: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
    /**
     * Choose, which inventory to update.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory updateMany
   */
  export type inventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput
  }

  /**
   * inventory upsert
   */
  export type inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * The filter to search for the inventory to update in case it exists.
     */
    where: inventoryWhereUniqueInput
    /**
     * In case the inventory found by the `where` argument doesn't exist, create a new inventory with this data.
     */
    create: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
    /**
     * In case the inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
  }

  /**
   * inventory delete
   */
  export type inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Filter which inventory to delete.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory deleteMany
   */
  export type inventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoryWhereInput
  }

  /**
   * inventory without action
   */
  export type inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
  }


  /**
   * Model ducks
   */

  export type AggregateDucks = {
    _count: DucksCountAggregateOutputType | null
    _avg: DucksAvgAggregateOutputType | null
    _sum: DucksSumAggregateOutputType | null
    _min: DucksMinAggregateOutputType | null
    _max: DucksMaxAggregateOutputType | null
  }

  export type DucksAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
  }

  export type DucksSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    price: bigint | null
  }

  export type DucksMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: bigint | null
    name: string | null
    image: string | null
    price: bigint | null
  }

  export type DucksMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: bigint | null
    name: string | null
    image: string | null
    price: bigint | null
  }

  export type DucksCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    name: number
    image: number
    price: number
    _all: number
  }


  export type DucksAvgAggregateInputType = {
    id?: true
    userId?: true
    price?: true
  }

  export type DucksSumAggregateInputType = {
    id?: true
    userId?: true
    price?: true
  }

  export type DucksMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    name?: true
    image?: true
    price?: true
  }

  export type DucksMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    name?: true
    image?: true
    price?: true
  }

  export type DucksCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    name?: true
    image?: true
    price?: true
    _all?: true
  }

  export type DucksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ducks to aggregate.
     */
    where?: ducksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ducks to fetch.
     */
    orderBy?: ducksOrderByWithRelationInput | ducksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ducksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ducks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ducks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ducks
    **/
    _count?: true | DucksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DucksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DucksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DucksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DucksMaxAggregateInputType
  }

  export type GetDucksAggregateType<T extends DucksAggregateArgs> = {
        [P in keyof T & keyof AggregateDucks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDucks[P]>
      : GetScalarType<T[P], AggregateDucks[P]>
  }




  export type ducksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ducksWhereInput
    orderBy?: ducksOrderByWithAggregationInput | ducksOrderByWithAggregationInput[]
    by: DucksScalarFieldEnum[] | DucksScalarFieldEnum
    having?: ducksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DucksCountAggregateInputType | true
    _avg?: DucksAvgAggregateInputType
    _sum?: DucksSumAggregateInputType
    _min?: DucksMinAggregateInputType
    _max?: DucksMaxAggregateInputType
  }

  export type DucksGroupByOutputType = {
    id: bigint
    createdAt: Date
    updatedAt: Date
    userId: bigint | null
    name: string
    image: string
    price: bigint
    _count: DucksCountAggregateOutputType | null
    _avg: DucksAvgAggregateOutputType | null
    _sum: DucksSumAggregateOutputType | null
    _min: DucksMinAggregateOutputType | null
    _max: DucksMaxAggregateOutputType | null
  }

  type GetDucksGroupByPayload<T extends ducksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DucksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DucksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DucksGroupByOutputType[P]>
            : GetScalarType<T[P], DucksGroupByOutputType[P]>
        }
      >
    >


  export type ducksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    name?: boolean
    image?: boolean
    price?: boolean
  }, ExtArgs["result"]["ducks"]>

  export type ducksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    name?: boolean
    image?: boolean
    price?: boolean
  }, ExtArgs["result"]["ducks"]>

  export type ducksSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    name?: boolean
    image?: boolean
    price?: boolean
  }


  export type $ducksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ducks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      updatedAt: Date
      userId: bigint | null
      name: string
      image: string
      price: bigint
    }, ExtArgs["result"]["ducks"]>
    composites: {}
  }

  type ducksGetPayload<S extends boolean | null | undefined | ducksDefaultArgs> = $Result.GetResult<Prisma.$ducksPayload, S>

  type ducksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ducksFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DucksCountAggregateInputType | true
    }

  export interface ducksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ducks'], meta: { name: 'ducks' } }
    /**
     * Find zero or one Ducks that matches the filter.
     * @param {ducksFindUniqueArgs} args - Arguments to find a Ducks
     * @example
     * // Get one Ducks
     * const ducks = await prisma.ducks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ducksFindUniqueArgs>(args: SelectSubset<T, ducksFindUniqueArgs<ExtArgs>>): Prisma__ducksClient<$Result.GetResult<Prisma.$ducksPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ducks that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ducksFindUniqueOrThrowArgs} args - Arguments to find a Ducks
     * @example
     * // Get one Ducks
     * const ducks = await prisma.ducks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ducksFindUniqueOrThrowArgs>(args: SelectSubset<T, ducksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ducksClient<$Result.GetResult<Prisma.$ducksPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ducks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ducksFindFirstArgs} args - Arguments to find a Ducks
     * @example
     * // Get one Ducks
     * const ducks = await prisma.ducks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ducksFindFirstArgs>(args?: SelectSubset<T, ducksFindFirstArgs<ExtArgs>>): Prisma__ducksClient<$Result.GetResult<Prisma.$ducksPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ducks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ducksFindFirstOrThrowArgs} args - Arguments to find a Ducks
     * @example
     * // Get one Ducks
     * const ducks = await prisma.ducks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ducksFindFirstOrThrowArgs>(args?: SelectSubset<T, ducksFindFirstOrThrowArgs<ExtArgs>>): Prisma__ducksClient<$Result.GetResult<Prisma.$ducksPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ducks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ducksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ducks
     * const ducks = await prisma.ducks.findMany()
     * 
     * // Get first 10 Ducks
     * const ducks = await prisma.ducks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ducksWithIdOnly = await prisma.ducks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ducksFindManyArgs>(args?: SelectSubset<T, ducksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ducksPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ducks.
     * @param {ducksCreateArgs} args - Arguments to create a Ducks.
     * @example
     * // Create one Ducks
     * const Ducks = await prisma.ducks.create({
     *   data: {
     *     // ... data to create a Ducks
     *   }
     * })
     * 
     */
    create<T extends ducksCreateArgs>(args: SelectSubset<T, ducksCreateArgs<ExtArgs>>): Prisma__ducksClient<$Result.GetResult<Prisma.$ducksPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ducks.
     * @param {ducksCreateManyArgs} args - Arguments to create many Ducks.
     * @example
     * // Create many Ducks
     * const ducks = await prisma.ducks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ducksCreateManyArgs>(args?: SelectSubset<T, ducksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ducks and returns the data saved in the database.
     * @param {ducksCreateManyAndReturnArgs} args - Arguments to create many Ducks.
     * @example
     * // Create many Ducks
     * const ducks = await prisma.ducks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ducks and only return the `id`
     * const ducksWithIdOnly = await prisma.ducks.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ducksCreateManyAndReturnArgs>(args?: SelectSubset<T, ducksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ducksPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ducks.
     * @param {ducksDeleteArgs} args - Arguments to delete one Ducks.
     * @example
     * // Delete one Ducks
     * const Ducks = await prisma.ducks.delete({
     *   where: {
     *     // ... filter to delete one Ducks
     *   }
     * })
     * 
     */
    delete<T extends ducksDeleteArgs>(args: SelectSubset<T, ducksDeleteArgs<ExtArgs>>): Prisma__ducksClient<$Result.GetResult<Prisma.$ducksPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ducks.
     * @param {ducksUpdateArgs} args - Arguments to update one Ducks.
     * @example
     * // Update one Ducks
     * const ducks = await prisma.ducks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ducksUpdateArgs>(args: SelectSubset<T, ducksUpdateArgs<ExtArgs>>): Prisma__ducksClient<$Result.GetResult<Prisma.$ducksPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ducks.
     * @param {ducksDeleteManyArgs} args - Arguments to filter Ducks to delete.
     * @example
     * // Delete a few Ducks
     * const { count } = await prisma.ducks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ducksDeleteManyArgs>(args?: SelectSubset<T, ducksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ducks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ducksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ducks
     * const ducks = await prisma.ducks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ducksUpdateManyArgs>(args: SelectSubset<T, ducksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ducks.
     * @param {ducksUpsertArgs} args - Arguments to update or create a Ducks.
     * @example
     * // Update or create a Ducks
     * const ducks = await prisma.ducks.upsert({
     *   create: {
     *     // ... data to create a Ducks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ducks we want to update
     *   }
     * })
     */
    upsert<T extends ducksUpsertArgs>(args: SelectSubset<T, ducksUpsertArgs<ExtArgs>>): Prisma__ducksClient<$Result.GetResult<Prisma.$ducksPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ducks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ducksCountArgs} args - Arguments to filter Ducks to count.
     * @example
     * // Count the number of Ducks
     * const count = await prisma.ducks.count({
     *   where: {
     *     // ... the filter for the Ducks we want to count
     *   }
     * })
    **/
    count<T extends ducksCountArgs>(
      args?: Subset<T, ducksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DucksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ducks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DucksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DucksAggregateArgs>(args: Subset<T, DucksAggregateArgs>): Prisma.PrismaPromise<GetDucksAggregateType<T>>

    /**
     * Group by Ducks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ducksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ducksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ducksGroupByArgs['orderBy'] }
        : { orderBy?: ducksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ducksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDucksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ducks model
   */
  readonly fields: ducksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ducks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ducksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ducks model
   */ 
  interface ducksFieldRefs {
    readonly id: FieldRef<"ducks", 'BigInt'>
    readonly createdAt: FieldRef<"ducks", 'DateTime'>
    readonly updatedAt: FieldRef<"ducks", 'DateTime'>
    readonly userId: FieldRef<"ducks", 'BigInt'>
    readonly name: FieldRef<"ducks", 'String'>
    readonly image: FieldRef<"ducks", 'String'>
    readonly price: FieldRef<"ducks", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * ducks findUnique
   */
  export type ducksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ducks
     */
    select?: ducksSelect<ExtArgs> | null
    /**
     * Filter, which ducks to fetch.
     */
    where: ducksWhereUniqueInput
  }

  /**
   * ducks findUniqueOrThrow
   */
  export type ducksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ducks
     */
    select?: ducksSelect<ExtArgs> | null
    /**
     * Filter, which ducks to fetch.
     */
    where: ducksWhereUniqueInput
  }

  /**
   * ducks findFirst
   */
  export type ducksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ducks
     */
    select?: ducksSelect<ExtArgs> | null
    /**
     * Filter, which ducks to fetch.
     */
    where?: ducksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ducks to fetch.
     */
    orderBy?: ducksOrderByWithRelationInput | ducksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ducks.
     */
    cursor?: ducksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ducks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ducks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ducks.
     */
    distinct?: DucksScalarFieldEnum | DucksScalarFieldEnum[]
  }

  /**
   * ducks findFirstOrThrow
   */
  export type ducksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ducks
     */
    select?: ducksSelect<ExtArgs> | null
    /**
     * Filter, which ducks to fetch.
     */
    where?: ducksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ducks to fetch.
     */
    orderBy?: ducksOrderByWithRelationInput | ducksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ducks.
     */
    cursor?: ducksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ducks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ducks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ducks.
     */
    distinct?: DucksScalarFieldEnum | DucksScalarFieldEnum[]
  }

  /**
   * ducks findMany
   */
  export type ducksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ducks
     */
    select?: ducksSelect<ExtArgs> | null
    /**
     * Filter, which ducks to fetch.
     */
    where?: ducksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ducks to fetch.
     */
    orderBy?: ducksOrderByWithRelationInput | ducksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ducks.
     */
    cursor?: ducksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ducks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ducks.
     */
    skip?: number
    distinct?: DucksScalarFieldEnum | DucksScalarFieldEnum[]
  }

  /**
   * ducks create
   */
  export type ducksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ducks
     */
    select?: ducksSelect<ExtArgs> | null
    /**
     * The data needed to create a ducks.
     */
    data?: XOR<ducksCreateInput, ducksUncheckedCreateInput>
  }

  /**
   * ducks createMany
   */
  export type ducksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ducks.
     */
    data: ducksCreateManyInput | ducksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ducks createManyAndReturn
   */
  export type ducksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ducks
     */
    select?: ducksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ducks.
     */
    data: ducksCreateManyInput | ducksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ducks update
   */
  export type ducksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ducks
     */
    select?: ducksSelect<ExtArgs> | null
    /**
     * The data needed to update a ducks.
     */
    data: XOR<ducksUpdateInput, ducksUncheckedUpdateInput>
    /**
     * Choose, which ducks to update.
     */
    where: ducksWhereUniqueInput
  }

  /**
   * ducks updateMany
   */
  export type ducksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ducks.
     */
    data: XOR<ducksUpdateManyMutationInput, ducksUncheckedUpdateManyInput>
    /**
     * Filter which ducks to update
     */
    where?: ducksWhereInput
  }

  /**
   * ducks upsert
   */
  export type ducksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ducks
     */
    select?: ducksSelect<ExtArgs> | null
    /**
     * The filter to search for the ducks to update in case it exists.
     */
    where: ducksWhereUniqueInput
    /**
     * In case the ducks found by the `where` argument doesn't exist, create a new ducks with this data.
     */
    create: XOR<ducksCreateInput, ducksUncheckedCreateInput>
    /**
     * In case the ducks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ducksUpdateInput, ducksUncheckedUpdateInput>
  }

  /**
   * ducks delete
   */
  export type ducksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ducks
     */
    select?: ducksSelect<ExtArgs> | null
    /**
     * Filter which ducks to delete.
     */
    where: ducksWhereUniqueInput
  }

  /**
   * ducks deleteMany
   */
  export type ducksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ducks to delete
     */
    where?: ducksWhereInput
  }

  /**
   * ducks without action
   */
  export type ducksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ducks
     */
    select?: ducksSelect<ExtArgs> | null
  }


  /**
   * Model trade
   */

  export type AggregateTrade = {
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  export type TradeAvgAggregateOutputType = {
    id: number | null
    auctionId: number | null
    receiver: number | null
  }

  export type TradeSumAggregateOutputType = {
    id: bigint | null
    auctionId: bigint | null
    receiver: bigint | null
  }

  export type TradeMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    auctionId: bigint | null
    receiver: bigint | null
  }

  export type TradeMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    auctionId: bigint | null
    receiver: bigint | null
  }

  export type TradeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    auctionId: number
    receiver: number
    _all: number
  }


  export type TradeAvgAggregateInputType = {
    id?: true
    auctionId?: true
    receiver?: true
  }

  export type TradeSumAggregateInputType = {
    id?: true
    auctionId?: true
    receiver?: true
  }

  export type TradeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    auctionId?: true
    receiver?: true
  }

  export type TradeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    auctionId?: true
    receiver?: true
  }

  export type TradeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    auctionId?: true
    receiver?: true
    _all?: true
  }

  export type TradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trade to aggregate.
     */
    where?: tradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trades to fetch.
     */
    orderBy?: tradeOrderByWithRelationInput | tradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trades
    **/
    _count?: true | TradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeMaxAggregateInputType
  }

  export type GetTradeAggregateType<T extends TradeAggregateArgs> = {
        [P in keyof T & keyof AggregateTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrade[P]>
      : GetScalarType<T[P], AggregateTrade[P]>
  }




  export type tradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tradeWhereInput
    orderBy?: tradeOrderByWithAggregationInput | tradeOrderByWithAggregationInput[]
    by: TradeScalarFieldEnum[] | TradeScalarFieldEnum
    having?: tradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeCountAggregateInputType | true
    _avg?: TradeAvgAggregateInputType
    _sum?: TradeSumAggregateInputType
    _min?: TradeMinAggregateInputType
    _max?: TradeMaxAggregateInputType
  }

  export type TradeGroupByOutputType = {
    id: bigint
    createdAt: Date
    updatedAt: Date
    auctionId: bigint
    receiver: bigint
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  type GetTradeGroupByPayload<T extends tradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeGroupByOutputType[P]>
            : GetScalarType<T[P], TradeGroupByOutputType[P]>
        }
      >
    >


  export type tradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auctionId?: boolean
    receiver?: boolean
  }, ExtArgs["result"]["trade"]>

  export type tradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auctionId?: boolean
    receiver?: boolean
  }, ExtArgs["result"]["trade"]>

  export type tradeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auctionId?: boolean
    receiver?: boolean
  }


  export type $tradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trade"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      updatedAt: Date
      auctionId: bigint
      receiver: bigint
    }, ExtArgs["result"]["trade"]>
    composites: {}
  }

  type tradeGetPayload<S extends boolean | null | undefined | tradeDefaultArgs> = $Result.GetResult<Prisma.$tradePayload, S>

  type tradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tradeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TradeCountAggregateInputType | true
    }

  export interface tradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trade'], meta: { name: 'trade' } }
    /**
     * Find zero or one Trade that matches the filter.
     * @param {tradeFindUniqueArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tradeFindUniqueArgs>(args: SelectSubset<T, tradeFindUniqueArgs<ExtArgs>>): Prisma__tradeClient<$Result.GetResult<Prisma.$tradePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Trade that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tradeFindUniqueOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tradeFindUniqueOrThrowArgs>(args: SelectSubset<T, tradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tradeClient<$Result.GetResult<Prisma.$tradePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Trade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeFindFirstArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tradeFindFirstArgs>(args?: SelectSubset<T, tradeFindFirstArgs<ExtArgs>>): Prisma__tradeClient<$Result.GetResult<Prisma.$tradePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Trade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeFindFirstOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tradeFindFirstOrThrowArgs>(args?: SelectSubset<T, tradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__tradeClient<$Result.GetResult<Prisma.$tradePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trades
     * const trades = await prisma.trade.findMany()
     * 
     * // Get first 10 Trades
     * const trades = await prisma.trade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradeWithIdOnly = await prisma.trade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tradeFindManyArgs>(args?: SelectSubset<T, tradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Trade.
     * @param {tradeCreateArgs} args - Arguments to create a Trade.
     * @example
     * // Create one Trade
     * const Trade = await prisma.trade.create({
     *   data: {
     *     // ... data to create a Trade
     *   }
     * })
     * 
     */
    create<T extends tradeCreateArgs>(args: SelectSubset<T, tradeCreateArgs<ExtArgs>>): Prisma__tradeClient<$Result.GetResult<Prisma.$tradePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Trades.
     * @param {tradeCreateManyArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tradeCreateManyArgs>(args?: SelectSubset<T, tradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trades and returns the data saved in the database.
     * @param {tradeCreateManyAndReturnArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tradeCreateManyAndReturnArgs>(args?: SelectSubset<T, tradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Trade.
     * @param {tradeDeleteArgs} args - Arguments to delete one Trade.
     * @example
     * // Delete one Trade
     * const Trade = await prisma.trade.delete({
     *   where: {
     *     // ... filter to delete one Trade
     *   }
     * })
     * 
     */
    delete<T extends tradeDeleteArgs>(args: SelectSubset<T, tradeDeleteArgs<ExtArgs>>): Prisma__tradeClient<$Result.GetResult<Prisma.$tradePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Trade.
     * @param {tradeUpdateArgs} args - Arguments to update one Trade.
     * @example
     * // Update one Trade
     * const trade = await prisma.trade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tradeUpdateArgs>(args: SelectSubset<T, tradeUpdateArgs<ExtArgs>>): Prisma__tradeClient<$Result.GetResult<Prisma.$tradePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Trades.
     * @param {tradeDeleteManyArgs} args - Arguments to filter Trades to delete.
     * @example
     * // Delete a few Trades
     * const { count } = await prisma.trade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tradeDeleteManyArgs>(args?: SelectSubset<T, tradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tradeUpdateManyArgs>(args: SelectSubset<T, tradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trade.
     * @param {tradeUpsertArgs} args - Arguments to update or create a Trade.
     * @example
     * // Update or create a Trade
     * const trade = await prisma.trade.upsert({
     *   create: {
     *     // ... data to create a Trade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trade we want to update
     *   }
     * })
     */
    upsert<T extends tradeUpsertArgs>(args: SelectSubset<T, tradeUpsertArgs<ExtArgs>>): Prisma__tradeClient<$Result.GetResult<Prisma.$tradePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeCountArgs} args - Arguments to filter Trades to count.
     * @example
     * // Count the number of Trades
     * const count = await prisma.trade.count({
     *   where: {
     *     // ... the filter for the Trades we want to count
     *   }
     * })
    **/
    count<T extends tradeCountArgs>(
      args?: Subset<T, tradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TradeAggregateArgs>(args: Subset<T, TradeAggregateArgs>): Prisma.PrismaPromise<GetTradeAggregateType<T>>

    /**
     * Group by Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tradeGroupByArgs['orderBy'] }
        : { orderBy?: tradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trade model
   */
  readonly fields: tradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the trade model
   */ 
  interface tradeFieldRefs {
    readonly id: FieldRef<"trade", 'BigInt'>
    readonly createdAt: FieldRef<"trade", 'DateTime'>
    readonly updatedAt: FieldRef<"trade", 'DateTime'>
    readonly auctionId: FieldRef<"trade", 'BigInt'>
    readonly receiver: FieldRef<"trade", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * trade findUnique
   */
  export type tradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trade
     */
    select?: tradeSelect<ExtArgs> | null
    /**
     * Filter, which trade to fetch.
     */
    where: tradeWhereUniqueInput
  }

  /**
   * trade findUniqueOrThrow
   */
  export type tradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trade
     */
    select?: tradeSelect<ExtArgs> | null
    /**
     * Filter, which trade to fetch.
     */
    where: tradeWhereUniqueInput
  }

  /**
   * trade findFirst
   */
  export type tradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trade
     */
    select?: tradeSelect<ExtArgs> | null
    /**
     * Filter, which trade to fetch.
     */
    where?: tradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trades to fetch.
     */
    orderBy?: tradeOrderByWithRelationInput | tradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trades.
     */
    cursor?: tradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * trade findFirstOrThrow
   */
  export type tradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trade
     */
    select?: tradeSelect<ExtArgs> | null
    /**
     * Filter, which trade to fetch.
     */
    where?: tradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trades to fetch.
     */
    orderBy?: tradeOrderByWithRelationInput | tradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trades.
     */
    cursor?: tradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * trade findMany
   */
  export type tradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trade
     */
    select?: tradeSelect<ExtArgs> | null
    /**
     * Filter, which trades to fetch.
     */
    where?: tradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trades to fetch.
     */
    orderBy?: tradeOrderByWithRelationInput | tradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trades.
     */
    cursor?: tradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trades.
     */
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * trade create
   */
  export type tradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trade
     */
    select?: tradeSelect<ExtArgs> | null
    /**
     * The data needed to create a trade.
     */
    data: XOR<tradeCreateInput, tradeUncheckedCreateInput>
  }

  /**
   * trade createMany
   */
  export type tradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trades.
     */
    data: tradeCreateManyInput | tradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trade createManyAndReturn
   */
  export type tradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trade
     */
    select?: tradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many trades.
     */
    data: tradeCreateManyInput | tradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trade update
   */
  export type tradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trade
     */
    select?: tradeSelect<ExtArgs> | null
    /**
     * The data needed to update a trade.
     */
    data: XOR<tradeUpdateInput, tradeUncheckedUpdateInput>
    /**
     * Choose, which trade to update.
     */
    where: tradeWhereUniqueInput
  }

  /**
   * trade updateMany
   */
  export type tradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trades.
     */
    data: XOR<tradeUpdateManyMutationInput, tradeUncheckedUpdateManyInput>
    /**
     * Filter which trades to update
     */
    where?: tradeWhereInput
  }

  /**
   * trade upsert
   */
  export type tradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trade
     */
    select?: tradeSelect<ExtArgs> | null
    /**
     * The filter to search for the trade to update in case it exists.
     */
    where: tradeWhereUniqueInput
    /**
     * In case the trade found by the `where` argument doesn't exist, create a new trade with this data.
     */
    create: XOR<tradeCreateInput, tradeUncheckedCreateInput>
    /**
     * In case the trade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tradeUpdateInput, tradeUncheckedUpdateInput>
  }

  /**
   * trade delete
   */
  export type tradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trade
     */
    select?: tradeSelect<ExtArgs> | null
    /**
     * Filter which trade to delete.
     */
    where: tradeWhereUniqueInput
  }

  /**
   * trade deleteMany
   */
  export type tradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trades to delete
     */
    where?: tradeWhereInput
  }

  /**
   * trade without action
   */
  export type tradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trade
     */
    select?: tradeSelect<ExtArgs> | null
  }


  /**
   * Model receipt
   */

  export type AggregateReceipt = {
    _count: ReceiptCountAggregateOutputType | null
    _avg: ReceiptAvgAggregateOutputType | null
    _sum: ReceiptSumAggregateOutputType | null
    _min: ReceiptMinAggregateOutputType | null
    _max: ReceiptMaxAggregateOutputType | null
  }

  export type ReceiptAvgAggregateOutputType = {
    id: number | null
    tradeId: number | null
    status: number | null
  }

  export type ReceiptSumAggregateOutputType = {
    id: bigint | null
    tradeId: bigint | null
    status: number | null
  }

  export type ReceiptMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    tradeId: bigint | null
    status: number | null
  }

  export type ReceiptMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    tradeId: bigint | null
    status: number | null
  }

  export type ReceiptCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    tradeId: number
    status: number
    _all: number
  }


  export type ReceiptAvgAggregateInputType = {
    id?: true
    tradeId?: true
    status?: true
  }

  export type ReceiptSumAggregateInputType = {
    id?: true
    tradeId?: true
    status?: true
  }

  export type ReceiptMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    tradeId?: true
    status?: true
  }

  export type ReceiptMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    tradeId?: true
    status?: true
  }

  export type ReceiptCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    tradeId?: true
    status?: true
    _all?: true
  }

  export type ReceiptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receipt to aggregate.
     */
    where?: receiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipts to fetch.
     */
    orderBy?: receiptOrderByWithRelationInput | receiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: receiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned receipts
    **/
    _count?: true | ReceiptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceiptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceiptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceiptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceiptMaxAggregateInputType
  }

  export type GetReceiptAggregateType<T extends ReceiptAggregateArgs> = {
        [P in keyof T & keyof AggregateReceipt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceipt[P]>
      : GetScalarType<T[P], AggregateReceipt[P]>
  }




  export type receiptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptWhereInput
    orderBy?: receiptOrderByWithAggregationInput | receiptOrderByWithAggregationInput[]
    by: ReceiptScalarFieldEnum[] | ReceiptScalarFieldEnum
    having?: receiptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceiptCountAggregateInputType | true
    _avg?: ReceiptAvgAggregateInputType
    _sum?: ReceiptSumAggregateInputType
    _min?: ReceiptMinAggregateInputType
    _max?: ReceiptMaxAggregateInputType
  }

  export type ReceiptGroupByOutputType = {
    id: bigint
    createdAt: Date
    updatedAt: Date
    tradeId: bigint
    status: number
    _count: ReceiptCountAggregateOutputType | null
    _avg: ReceiptAvgAggregateOutputType | null
    _sum: ReceiptSumAggregateOutputType | null
    _min: ReceiptMinAggregateOutputType | null
    _max: ReceiptMaxAggregateOutputType | null
  }

  type GetReceiptGroupByPayload<T extends receiptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceiptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceiptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceiptGroupByOutputType[P]>
            : GetScalarType<T[P], ReceiptGroupByOutputType[P]>
        }
      >
    >


  export type receiptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tradeId?: boolean
    status?: boolean
  }, ExtArgs["result"]["receipt"]>

  export type receiptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tradeId?: boolean
    status?: boolean
  }, ExtArgs["result"]["receipt"]>

  export type receiptSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tradeId?: boolean
    status?: boolean
  }


  export type $receiptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "receipt"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      updatedAt: Date
      tradeId: bigint
      status: number
    }, ExtArgs["result"]["receipt"]>
    composites: {}
  }

  type receiptGetPayload<S extends boolean | null | undefined | receiptDefaultArgs> = $Result.GetResult<Prisma.$receiptPayload, S>

  type receiptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<receiptFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReceiptCountAggregateInputType | true
    }

  export interface receiptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['receipt'], meta: { name: 'receipt' } }
    /**
     * Find zero or one Receipt that matches the filter.
     * @param {receiptFindUniqueArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends receiptFindUniqueArgs>(args: SelectSubset<T, receiptFindUniqueArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Receipt that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {receiptFindUniqueOrThrowArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends receiptFindUniqueOrThrowArgs>(args: SelectSubset<T, receiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Receipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptFindFirstArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends receiptFindFirstArgs>(args?: SelectSubset<T, receiptFindFirstArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Receipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptFindFirstOrThrowArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends receiptFindFirstOrThrowArgs>(args?: SelectSubset<T, receiptFindFirstOrThrowArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Receipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receipts
     * const receipts = await prisma.receipt.findMany()
     * 
     * // Get first 10 Receipts
     * const receipts = await prisma.receipt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receiptWithIdOnly = await prisma.receipt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends receiptFindManyArgs>(args?: SelectSubset<T, receiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Receipt.
     * @param {receiptCreateArgs} args - Arguments to create a Receipt.
     * @example
     * // Create one Receipt
     * const Receipt = await prisma.receipt.create({
     *   data: {
     *     // ... data to create a Receipt
     *   }
     * })
     * 
     */
    create<T extends receiptCreateArgs>(args: SelectSubset<T, receiptCreateArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Receipts.
     * @param {receiptCreateManyArgs} args - Arguments to create many Receipts.
     * @example
     * // Create many Receipts
     * const receipt = await prisma.receipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends receiptCreateManyArgs>(args?: SelectSubset<T, receiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Receipts and returns the data saved in the database.
     * @param {receiptCreateManyAndReturnArgs} args - Arguments to create many Receipts.
     * @example
     * // Create many Receipts
     * const receipt = await prisma.receipt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Receipts and only return the `id`
     * const receiptWithIdOnly = await prisma.receipt.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends receiptCreateManyAndReturnArgs>(args?: SelectSubset<T, receiptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Receipt.
     * @param {receiptDeleteArgs} args - Arguments to delete one Receipt.
     * @example
     * // Delete one Receipt
     * const Receipt = await prisma.receipt.delete({
     *   where: {
     *     // ... filter to delete one Receipt
     *   }
     * })
     * 
     */
    delete<T extends receiptDeleteArgs>(args: SelectSubset<T, receiptDeleteArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Receipt.
     * @param {receiptUpdateArgs} args - Arguments to update one Receipt.
     * @example
     * // Update one Receipt
     * const receipt = await prisma.receipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends receiptUpdateArgs>(args: SelectSubset<T, receiptUpdateArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Receipts.
     * @param {receiptDeleteManyArgs} args - Arguments to filter Receipts to delete.
     * @example
     * // Delete a few Receipts
     * const { count } = await prisma.receipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends receiptDeleteManyArgs>(args?: SelectSubset<T, receiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receipts
     * const receipt = await prisma.receipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends receiptUpdateManyArgs>(args: SelectSubset<T, receiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Receipt.
     * @param {receiptUpsertArgs} args - Arguments to update or create a Receipt.
     * @example
     * // Update or create a Receipt
     * const receipt = await prisma.receipt.upsert({
     *   create: {
     *     // ... data to create a Receipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receipt we want to update
     *   }
     * })
     */
    upsert<T extends receiptUpsertArgs>(args: SelectSubset<T, receiptUpsertArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Receipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptCountArgs} args - Arguments to filter Receipts to count.
     * @example
     * // Count the number of Receipts
     * const count = await prisma.receipt.count({
     *   where: {
     *     // ... the filter for the Receipts we want to count
     *   }
     * })
    **/
    count<T extends receiptCountArgs>(
      args?: Subset<T, receiptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceiptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceiptAggregateArgs>(args: Subset<T, ReceiptAggregateArgs>): Prisma.PrismaPromise<GetReceiptAggregateType<T>>

    /**
     * Group by Receipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends receiptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: receiptGroupByArgs['orderBy'] }
        : { orderBy?: receiptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, receiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the receipt model
   */
  readonly fields: receiptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for receipt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__receiptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the receipt model
   */ 
  interface receiptFieldRefs {
    readonly id: FieldRef<"receipt", 'BigInt'>
    readonly createdAt: FieldRef<"receipt", 'DateTime'>
    readonly updatedAt: FieldRef<"receipt", 'DateTime'>
    readonly tradeId: FieldRef<"receipt", 'BigInt'>
    readonly status: FieldRef<"receipt", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * receipt findUnique
   */
  export type receiptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Filter, which receipt to fetch.
     */
    where: receiptWhereUniqueInput
  }

  /**
   * receipt findUniqueOrThrow
   */
  export type receiptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Filter, which receipt to fetch.
     */
    where: receiptWhereUniqueInput
  }

  /**
   * receipt findFirst
   */
  export type receiptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Filter, which receipt to fetch.
     */
    where?: receiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipts to fetch.
     */
    orderBy?: receiptOrderByWithRelationInput | receiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receipts.
     */
    cursor?: receiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receipts.
     */
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * receipt findFirstOrThrow
   */
  export type receiptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Filter, which receipt to fetch.
     */
    where?: receiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipts to fetch.
     */
    orderBy?: receiptOrderByWithRelationInput | receiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receipts.
     */
    cursor?: receiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receipts.
     */
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * receipt findMany
   */
  export type receiptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Filter, which receipts to fetch.
     */
    where?: receiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipts to fetch.
     */
    orderBy?: receiptOrderByWithRelationInput | receiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing receipts.
     */
    cursor?: receiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipts.
     */
    skip?: number
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * receipt create
   */
  export type receiptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * The data needed to create a receipt.
     */
    data: XOR<receiptCreateInput, receiptUncheckedCreateInput>
  }

  /**
   * receipt createMany
   */
  export type receiptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many receipts.
     */
    data: receiptCreateManyInput | receiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * receipt createManyAndReturn
   */
  export type receiptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many receipts.
     */
    data: receiptCreateManyInput | receiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * receipt update
   */
  export type receiptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * The data needed to update a receipt.
     */
    data: XOR<receiptUpdateInput, receiptUncheckedUpdateInput>
    /**
     * Choose, which receipt to update.
     */
    where: receiptWhereUniqueInput
  }

  /**
   * receipt updateMany
   */
  export type receiptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update receipts.
     */
    data: XOR<receiptUpdateManyMutationInput, receiptUncheckedUpdateManyInput>
    /**
     * Filter which receipts to update
     */
    where?: receiptWhereInput
  }

  /**
   * receipt upsert
   */
  export type receiptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * The filter to search for the receipt to update in case it exists.
     */
    where: receiptWhereUniqueInput
    /**
     * In case the receipt found by the `where` argument doesn't exist, create a new receipt with this data.
     */
    create: XOR<receiptCreateInput, receiptUncheckedCreateInput>
    /**
     * In case the receipt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<receiptUpdateInput, receiptUncheckedUpdateInput>
  }

  /**
   * receipt delete
   */
  export type receiptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Filter which receipt to delete.
     */
    where: receiptWhereUniqueInput
  }

  /**
   * receipt deleteMany
   */
  export type receiptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receipts to delete
     */
    where?: receiptWhereInput
  }

  /**
   * receipt without action
   */
  export type receiptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
  }


  /**
   * Model auction
   */

  export type AggregateAuction = {
    _count: AuctionCountAggregateOutputType | null
    _avg: AuctionAvgAggregateOutputType | null
    _sum: AuctionSumAggregateOutputType | null
    _min: AuctionMinAggregateOutputType | null
    _max: AuctionMaxAggregateOutputType | null
  }

  export type AuctionAvgAggregateOutputType = {
    id: number | null
    seller: number | null
    itemId: number | null
    price: number | null
    tax: number | null
  }

  export type AuctionSumAggregateOutputType = {
    id: bigint | null
    seller: bigint | null
    itemId: bigint | null
    price: bigint | null
    tax: bigint | null
  }

  export type AuctionMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    expiredAt: Date | null
    seller: bigint | null
    itemId: bigint | null
    price: bigint | null
    tax: bigint | null
  }

  export type AuctionMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    expiredAt: Date | null
    seller: bigint | null
    itemId: bigint | null
    price: bigint | null
    tax: bigint | null
  }

  export type AuctionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    expiredAt: number
    seller: number
    itemId: number
    price: number
    tax: number
    _all: number
  }


  export type AuctionAvgAggregateInputType = {
    id?: true
    seller?: true
    itemId?: true
    price?: true
    tax?: true
  }

  export type AuctionSumAggregateInputType = {
    id?: true
    seller?: true
    itemId?: true
    price?: true
    tax?: true
  }

  export type AuctionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expiredAt?: true
    seller?: true
    itemId?: true
    price?: true
    tax?: true
  }

  export type AuctionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expiredAt?: true
    seller?: true
    itemId?: true
    price?: true
    tax?: true
  }

  export type AuctionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expiredAt?: true
    seller?: true
    itemId?: true
    price?: true
    tax?: true
    _all?: true
  }

  export type AuctionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auction to aggregate.
     */
    where?: auctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auctions to fetch.
     */
    orderBy?: auctionOrderByWithRelationInput | auctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auctions
    **/
    _count?: true | AuctionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuctionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuctionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuctionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuctionMaxAggregateInputType
  }

  export type GetAuctionAggregateType<T extends AuctionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuction[P]>
      : GetScalarType<T[P], AggregateAuction[P]>
  }




  export type auctionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auctionWhereInput
    orderBy?: auctionOrderByWithAggregationInput | auctionOrderByWithAggregationInput[]
    by: AuctionScalarFieldEnum[] | AuctionScalarFieldEnum
    having?: auctionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuctionCountAggregateInputType | true
    _avg?: AuctionAvgAggregateInputType
    _sum?: AuctionSumAggregateInputType
    _min?: AuctionMinAggregateInputType
    _max?: AuctionMaxAggregateInputType
  }

  export type AuctionGroupByOutputType = {
    id: bigint
    createdAt: Date
    updatedAt: Date
    expiredAt: Date
    seller: bigint
    itemId: bigint
    price: bigint
    tax: bigint
    _count: AuctionCountAggregateOutputType | null
    _avg: AuctionAvgAggregateOutputType | null
    _sum: AuctionSumAggregateOutputType | null
    _min: AuctionMinAggregateOutputType | null
    _max: AuctionMaxAggregateOutputType | null
  }

  type GetAuctionGroupByPayload<T extends auctionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuctionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuctionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuctionGroupByOutputType[P]>
            : GetScalarType<T[P], AuctionGroupByOutputType[P]>
        }
      >
    >


  export type auctionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiredAt?: boolean
    seller?: boolean
    itemId?: boolean
    price?: boolean
    tax?: boolean
  }, ExtArgs["result"]["auction"]>

  export type auctionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiredAt?: boolean
    seller?: boolean
    itemId?: boolean
    price?: boolean
    tax?: boolean
  }, ExtArgs["result"]["auction"]>

  export type auctionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiredAt?: boolean
    seller?: boolean
    itemId?: boolean
    price?: boolean
    tax?: boolean
  }


  export type $auctionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      updatedAt: Date
      expiredAt: Date
      seller: bigint
      itemId: bigint
      price: bigint
      tax: bigint
    }, ExtArgs["result"]["auction"]>
    composites: {}
  }

  type auctionGetPayload<S extends boolean | null | undefined | auctionDefaultArgs> = $Result.GetResult<Prisma.$auctionPayload, S>

  type auctionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<auctionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuctionCountAggregateInputType | true
    }

  export interface auctionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auction'], meta: { name: 'auction' } }
    /**
     * Find zero or one Auction that matches the filter.
     * @param {auctionFindUniqueArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auctionFindUniqueArgs>(args: SelectSubset<T, auctionFindUniqueArgs<ExtArgs>>): Prisma__auctionClient<$Result.GetResult<Prisma.$auctionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Auction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {auctionFindUniqueOrThrowArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auctionFindUniqueOrThrowArgs>(args: SelectSubset<T, auctionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auctionClient<$Result.GetResult<Prisma.$auctionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Auction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auctionFindFirstArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auctionFindFirstArgs>(args?: SelectSubset<T, auctionFindFirstArgs<ExtArgs>>): Prisma__auctionClient<$Result.GetResult<Prisma.$auctionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Auction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auctionFindFirstOrThrowArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auctionFindFirstOrThrowArgs>(args?: SelectSubset<T, auctionFindFirstOrThrowArgs<ExtArgs>>): Prisma__auctionClient<$Result.GetResult<Prisma.$auctionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Auctions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auctionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auctions
     * const auctions = await prisma.auction.findMany()
     * 
     * // Get first 10 Auctions
     * const auctions = await prisma.auction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auctionWithIdOnly = await prisma.auction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends auctionFindManyArgs>(args?: SelectSubset<T, auctionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auctionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Auction.
     * @param {auctionCreateArgs} args - Arguments to create a Auction.
     * @example
     * // Create one Auction
     * const Auction = await prisma.auction.create({
     *   data: {
     *     // ... data to create a Auction
     *   }
     * })
     * 
     */
    create<T extends auctionCreateArgs>(args: SelectSubset<T, auctionCreateArgs<ExtArgs>>): Prisma__auctionClient<$Result.GetResult<Prisma.$auctionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Auctions.
     * @param {auctionCreateManyArgs} args - Arguments to create many Auctions.
     * @example
     * // Create many Auctions
     * const auction = await prisma.auction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auctionCreateManyArgs>(args?: SelectSubset<T, auctionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auctions and returns the data saved in the database.
     * @param {auctionCreateManyAndReturnArgs} args - Arguments to create many Auctions.
     * @example
     * // Create many Auctions
     * const auction = await prisma.auction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auctions and only return the `id`
     * const auctionWithIdOnly = await prisma.auction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends auctionCreateManyAndReturnArgs>(args?: SelectSubset<T, auctionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auctionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Auction.
     * @param {auctionDeleteArgs} args - Arguments to delete one Auction.
     * @example
     * // Delete one Auction
     * const Auction = await prisma.auction.delete({
     *   where: {
     *     // ... filter to delete one Auction
     *   }
     * })
     * 
     */
    delete<T extends auctionDeleteArgs>(args: SelectSubset<T, auctionDeleteArgs<ExtArgs>>): Prisma__auctionClient<$Result.GetResult<Prisma.$auctionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Auction.
     * @param {auctionUpdateArgs} args - Arguments to update one Auction.
     * @example
     * // Update one Auction
     * const auction = await prisma.auction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auctionUpdateArgs>(args: SelectSubset<T, auctionUpdateArgs<ExtArgs>>): Prisma__auctionClient<$Result.GetResult<Prisma.$auctionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Auctions.
     * @param {auctionDeleteManyArgs} args - Arguments to filter Auctions to delete.
     * @example
     * // Delete a few Auctions
     * const { count } = await prisma.auction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auctionDeleteManyArgs>(args?: SelectSubset<T, auctionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auctionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auctions
     * const auction = await prisma.auction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auctionUpdateManyArgs>(args: SelectSubset<T, auctionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Auction.
     * @param {auctionUpsertArgs} args - Arguments to update or create a Auction.
     * @example
     * // Update or create a Auction
     * const auction = await prisma.auction.upsert({
     *   create: {
     *     // ... data to create a Auction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auction we want to update
     *   }
     * })
     */
    upsert<T extends auctionUpsertArgs>(args: SelectSubset<T, auctionUpsertArgs<ExtArgs>>): Prisma__auctionClient<$Result.GetResult<Prisma.$auctionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Auctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auctionCountArgs} args - Arguments to filter Auctions to count.
     * @example
     * // Count the number of Auctions
     * const count = await prisma.auction.count({
     *   where: {
     *     // ... the filter for the Auctions we want to count
     *   }
     * })
    **/
    count<T extends auctionCountArgs>(
      args?: Subset<T, auctionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuctionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuctionAggregateArgs>(args: Subset<T, AuctionAggregateArgs>): Prisma.PrismaPromise<GetAuctionAggregateType<T>>

    /**
     * Group by Auction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auctionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends auctionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auctionGroupByArgs['orderBy'] }
        : { orderBy?: auctionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, auctionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuctionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auction model
   */
  readonly fields: auctionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auctionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the auction model
   */ 
  interface auctionFieldRefs {
    readonly id: FieldRef<"auction", 'BigInt'>
    readonly createdAt: FieldRef<"auction", 'DateTime'>
    readonly updatedAt: FieldRef<"auction", 'DateTime'>
    readonly expiredAt: FieldRef<"auction", 'DateTime'>
    readonly seller: FieldRef<"auction", 'BigInt'>
    readonly itemId: FieldRef<"auction", 'BigInt'>
    readonly price: FieldRef<"auction", 'BigInt'>
    readonly tax: FieldRef<"auction", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * auction findUnique
   */
  export type auctionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction
     */
    select?: auctionSelect<ExtArgs> | null
    /**
     * Filter, which auction to fetch.
     */
    where: auctionWhereUniqueInput
  }

  /**
   * auction findUniqueOrThrow
   */
  export type auctionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction
     */
    select?: auctionSelect<ExtArgs> | null
    /**
     * Filter, which auction to fetch.
     */
    where: auctionWhereUniqueInput
  }

  /**
   * auction findFirst
   */
  export type auctionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction
     */
    select?: auctionSelect<ExtArgs> | null
    /**
     * Filter, which auction to fetch.
     */
    where?: auctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auctions to fetch.
     */
    orderBy?: auctionOrderByWithRelationInput | auctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auctions.
     */
    cursor?: auctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auctions.
     */
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * auction findFirstOrThrow
   */
  export type auctionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction
     */
    select?: auctionSelect<ExtArgs> | null
    /**
     * Filter, which auction to fetch.
     */
    where?: auctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auctions to fetch.
     */
    orderBy?: auctionOrderByWithRelationInput | auctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auctions.
     */
    cursor?: auctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auctions.
     */
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * auction findMany
   */
  export type auctionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction
     */
    select?: auctionSelect<ExtArgs> | null
    /**
     * Filter, which auctions to fetch.
     */
    where?: auctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auctions to fetch.
     */
    orderBy?: auctionOrderByWithRelationInput | auctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auctions.
     */
    cursor?: auctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auctions.
     */
    skip?: number
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * auction create
   */
  export type auctionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction
     */
    select?: auctionSelect<ExtArgs> | null
    /**
     * The data needed to create a auction.
     */
    data: XOR<auctionCreateInput, auctionUncheckedCreateInput>
  }

  /**
   * auction createMany
   */
  export type auctionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auctions.
     */
    data: auctionCreateManyInput | auctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auction createManyAndReturn
   */
  export type auctionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction
     */
    select?: auctionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many auctions.
     */
    data: auctionCreateManyInput | auctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auction update
   */
  export type auctionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction
     */
    select?: auctionSelect<ExtArgs> | null
    /**
     * The data needed to update a auction.
     */
    data: XOR<auctionUpdateInput, auctionUncheckedUpdateInput>
    /**
     * Choose, which auction to update.
     */
    where: auctionWhereUniqueInput
  }

  /**
   * auction updateMany
   */
  export type auctionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auctions.
     */
    data: XOR<auctionUpdateManyMutationInput, auctionUncheckedUpdateManyInput>
    /**
     * Filter which auctions to update
     */
    where?: auctionWhereInput
  }

  /**
   * auction upsert
   */
  export type auctionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction
     */
    select?: auctionSelect<ExtArgs> | null
    /**
     * The filter to search for the auction to update in case it exists.
     */
    where: auctionWhereUniqueInput
    /**
     * In case the auction found by the `where` argument doesn't exist, create a new auction with this data.
     */
    create: XOR<auctionCreateInput, auctionUncheckedCreateInput>
    /**
     * In case the auction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auctionUpdateInput, auctionUncheckedUpdateInput>
  }

  /**
   * auction delete
   */
  export type auctionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction
     */
    select?: auctionSelect<ExtArgs> | null
    /**
     * Filter which auction to delete.
     */
    where: auctionWhereUniqueInput
  }

  /**
   * auction deleteMany
   */
  export type auctionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auctions to delete
     */
    where?: auctionWhereInput
  }

  /**
   * auction without action
   */
  export type auctionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction
     */
    select?: auctionSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DuckUserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLogin: 'lastLogin',
    name: 'name',
    email: 'email',
    password: 'password',
    isDeleted: 'isDeleted'
  };

  export type DuckUserScalarFieldEnum = (typeof DuckUserScalarFieldEnum)[keyof typeof DuckUserScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    slotSize: 'slotSize',
    level: 'level'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const DucksScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    name: 'name',
    image: 'image',
    price: 'price'
  };

  export type DucksScalarFieldEnum = (typeof DucksScalarFieldEnum)[keyof typeof DucksScalarFieldEnum]


  export const TradeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    auctionId: 'auctionId',
    receiver: 'receiver'
  };

  export type TradeScalarFieldEnum = (typeof TradeScalarFieldEnum)[keyof typeof TradeScalarFieldEnum]


  export const ReceiptScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tradeId: 'tradeId',
    status: 'status'
  };

  export type ReceiptScalarFieldEnum = (typeof ReceiptScalarFieldEnum)[keyof typeof ReceiptScalarFieldEnum]


  export const AuctionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiredAt: 'expiredAt',
    seller: 'seller',
    itemId: 'itemId',
    price: 'price',
    tax: 'tax'
  };

  export type AuctionScalarFieldEnum = (typeof AuctionScalarFieldEnum)[keyof typeof AuctionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type duckUserWhereInput = {
    AND?: duckUserWhereInput | duckUserWhereInput[]
    OR?: duckUserWhereInput[]
    NOT?: duckUserWhereInput | duckUserWhereInput[]
    id?: BigIntFilter<"duckUser"> | bigint | number
    createdAt?: DateTimeFilter<"duckUser"> | Date | string
    updatedAt?: DateTimeFilter<"duckUser"> | Date | string
    lastLogin?: DateTimeFilter<"duckUser"> | Date | string
    name?: StringFilter<"duckUser"> | string
    email?: StringFilter<"duckUser"> | string
    password?: StringFilter<"duckUser"> | string
    isDeleted?: BoolFilter<"duckUser"> | boolean
  }

  export type duckUserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
  }

  export type duckUserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: duckUserWhereInput | duckUserWhereInput[]
    OR?: duckUserWhereInput[]
    NOT?: duckUserWhereInput | duckUserWhereInput[]
    createdAt?: DateTimeFilter<"duckUser"> | Date | string
    updatedAt?: DateTimeFilter<"duckUser"> | Date | string
    lastLogin?: DateTimeFilter<"duckUser"> | Date | string
    name?: StringFilter<"duckUser"> | string
    password?: StringFilter<"duckUser"> | string
    isDeleted?: BoolFilter<"duckUser"> | boolean
  }, "id" | "email">

  export type duckUserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
    _count?: duckUserCountOrderByAggregateInput
    _avg?: duckUserAvgOrderByAggregateInput
    _max?: duckUserMaxOrderByAggregateInput
    _min?: duckUserMinOrderByAggregateInput
    _sum?: duckUserSumOrderByAggregateInput
  }

  export type duckUserScalarWhereWithAggregatesInput = {
    AND?: duckUserScalarWhereWithAggregatesInput | duckUserScalarWhereWithAggregatesInput[]
    OR?: duckUserScalarWhereWithAggregatesInput[]
    NOT?: duckUserScalarWhereWithAggregatesInput | duckUserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"duckUser"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"duckUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"duckUser"> | Date | string
    lastLogin?: DateTimeWithAggregatesFilter<"duckUser"> | Date | string
    name?: StringWithAggregatesFilter<"duckUser"> | string
    email?: StringWithAggregatesFilter<"duckUser"> | string
    password?: StringWithAggregatesFilter<"duckUser"> | string
    isDeleted?: BoolWithAggregatesFilter<"duckUser"> | boolean
  }

  export type inventoryWhereInput = {
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    id?: BigIntFilter<"inventory"> | bigint | number
    createdAt?: DateTimeFilter<"inventory"> | Date | string
    updatedAt?: DateTimeFilter<"inventory"> | Date | string
    userId?: BigIntFilter<"inventory"> | bigint | number
    slotSize?: IntFilter<"inventory"> | number
    level?: IntFilter<"inventory"> | number
  }

  export type inventoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    slotSize?: SortOrder
    level?: SortOrder
  }

  export type inventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    userId?: bigint | number
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    createdAt?: DateTimeFilter<"inventory"> | Date | string
    updatedAt?: DateTimeFilter<"inventory"> | Date | string
    slotSize?: IntFilter<"inventory"> | number
    level?: IntFilter<"inventory"> | number
  }, "id" | "userId">

  export type inventoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    slotSize?: SortOrder
    level?: SortOrder
    _count?: inventoryCountOrderByAggregateInput
    _avg?: inventoryAvgOrderByAggregateInput
    _max?: inventoryMaxOrderByAggregateInput
    _min?: inventoryMinOrderByAggregateInput
    _sum?: inventorySumOrderByAggregateInput
  }

  export type inventoryScalarWhereWithAggregatesInput = {
    AND?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    OR?: inventoryScalarWhereWithAggregatesInput[]
    NOT?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"inventory"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"inventory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"inventory"> | Date | string
    userId?: BigIntWithAggregatesFilter<"inventory"> | bigint | number
    slotSize?: IntWithAggregatesFilter<"inventory"> | number
    level?: IntWithAggregatesFilter<"inventory"> | number
  }

  export type ducksWhereInput = {
    AND?: ducksWhereInput | ducksWhereInput[]
    OR?: ducksWhereInput[]
    NOT?: ducksWhereInput | ducksWhereInput[]
    id?: BigIntFilter<"ducks"> | bigint | number
    createdAt?: DateTimeFilter<"ducks"> | Date | string
    updatedAt?: DateTimeFilter<"ducks"> | Date | string
    userId?: BigIntNullableFilter<"ducks"> | bigint | number | null
    name?: StringFilter<"ducks"> | string
    image?: StringFilter<"ducks"> | string
    price?: BigIntFilter<"ducks"> | bigint | number
  }

  export type ducksOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
  }

  export type ducksWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ducksWhereInput | ducksWhereInput[]
    OR?: ducksWhereInput[]
    NOT?: ducksWhereInput | ducksWhereInput[]
    createdAt?: DateTimeFilter<"ducks"> | Date | string
    updatedAt?: DateTimeFilter<"ducks"> | Date | string
    userId?: BigIntNullableFilter<"ducks"> | bigint | number | null
    name?: StringFilter<"ducks"> | string
    image?: StringFilter<"ducks"> | string
    price?: BigIntFilter<"ducks"> | bigint | number
  }, "id">

  export type ducksOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    _count?: ducksCountOrderByAggregateInput
    _avg?: ducksAvgOrderByAggregateInput
    _max?: ducksMaxOrderByAggregateInput
    _min?: ducksMinOrderByAggregateInput
    _sum?: ducksSumOrderByAggregateInput
  }

  export type ducksScalarWhereWithAggregatesInput = {
    AND?: ducksScalarWhereWithAggregatesInput | ducksScalarWhereWithAggregatesInput[]
    OR?: ducksScalarWhereWithAggregatesInput[]
    NOT?: ducksScalarWhereWithAggregatesInput | ducksScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ducks"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"ducks"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ducks"> | Date | string
    userId?: BigIntNullableWithAggregatesFilter<"ducks"> | bigint | number | null
    name?: StringWithAggregatesFilter<"ducks"> | string
    image?: StringWithAggregatesFilter<"ducks"> | string
    price?: BigIntWithAggregatesFilter<"ducks"> | bigint | number
  }

  export type tradeWhereInput = {
    AND?: tradeWhereInput | tradeWhereInput[]
    OR?: tradeWhereInput[]
    NOT?: tradeWhereInput | tradeWhereInput[]
    id?: BigIntFilter<"trade"> | bigint | number
    createdAt?: DateTimeFilter<"trade"> | Date | string
    updatedAt?: DateTimeFilter<"trade"> | Date | string
    auctionId?: BigIntFilter<"trade"> | bigint | number
    receiver?: BigIntFilter<"trade"> | bigint | number
  }

  export type tradeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auctionId?: SortOrder
    receiver?: SortOrder
  }

  export type tradeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: tradeWhereInput | tradeWhereInput[]
    OR?: tradeWhereInput[]
    NOT?: tradeWhereInput | tradeWhereInput[]
    createdAt?: DateTimeFilter<"trade"> | Date | string
    updatedAt?: DateTimeFilter<"trade"> | Date | string
    auctionId?: BigIntFilter<"trade"> | bigint | number
    receiver?: BigIntFilter<"trade"> | bigint | number
  }, "id">

  export type tradeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auctionId?: SortOrder
    receiver?: SortOrder
    _count?: tradeCountOrderByAggregateInput
    _avg?: tradeAvgOrderByAggregateInput
    _max?: tradeMaxOrderByAggregateInput
    _min?: tradeMinOrderByAggregateInput
    _sum?: tradeSumOrderByAggregateInput
  }

  export type tradeScalarWhereWithAggregatesInput = {
    AND?: tradeScalarWhereWithAggregatesInput | tradeScalarWhereWithAggregatesInput[]
    OR?: tradeScalarWhereWithAggregatesInput[]
    NOT?: tradeScalarWhereWithAggregatesInput | tradeScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"trade"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"trade"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"trade"> | Date | string
    auctionId?: BigIntWithAggregatesFilter<"trade"> | bigint | number
    receiver?: BigIntWithAggregatesFilter<"trade"> | bigint | number
  }

  export type receiptWhereInput = {
    AND?: receiptWhereInput | receiptWhereInput[]
    OR?: receiptWhereInput[]
    NOT?: receiptWhereInput | receiptWhereInput[]
    id?: BigIntFilter<"receipt"> | bigint | number
    createdAt?: DateTimeFilter<"receipt"> | Date | string
    updatedAt?: DateTimeFilter<"receipt"> | Date | string
    tradeId?: BigIntFilter<"receipt"> | bigint | number
    status?: IntFilter<"receipt"> | number
  }

  export type receiptOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tradeId?: SortOrder
    status?: SortOrder
  }

  export type receiptWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: receiptWhereInput | receiptWhereInput[]
    OR?: receiptWhereInput[]
    NOT?: receiptWhereInput | receiptWhereInput[]
    createdAt?: DateTimeFilter<"receipt"> | Date | string
    updatedAt?: DateTimeFilter<"receipt"> | Date | string
    tradeId?: BigIntFilter<"receipt"> | bigint | number
    status?: IntFilter<"receipt"> | number
  }, "id">

  export type receiptOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tradeId?: SortOrder
    status?: SortOrder
    _count?: receiptCountOrderByAggregateInput
    _avg?: receiptAvgOrderByAggregateInput
    _max?: receiptMaxOrderByAggregateInput
    _min?: receiptMinOrderByAggregateInput
    _sum?: receiptSumOrderByAggregateInput
  }

  export type receiptScalarWhereWithAggregatesInput = {
    AND?: receiptScalarWhereWithAggregatesInput | receiptScalarWhereWithAggregatesInput[]
    OR?: receiptScalarWhereWithAggregatesInput[]
    NOT?: receiptScalarWhereWithAggregatesInput | receiptScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"receipt"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"receipt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"receipt"> | Date | string
    tradeId?: BigIntWithAggregatesFilter<"receipt"> | bigint | number
    status?: IntWithAggregatesFilter<"receipt"> | number
  }

  export type auctionWhereInput = {
    AND?: auctionWhereInput | auctionWhereInput[]
    OR?: auctionWhereInput[]
    NOT?: auctionWhereInput | auctionWhereInput[]
    id?: BigIntFilter<"auction"> | bigint | number
    createdAt?: DateTimeFilter<"auction"> | Date | string
    updatedAt?: DateTimeFilter<"auction"> | Date | string
    expiredAt?: DateTimeFilter<"auction"> | Date | string
    seller?: BigIntFilter<"auction"> | bigint | number
    itemId?: BigIntFilter<"auction"> | bigint | number
    price?: BigIntFilter<"auction"> | bigint | number
    tax?: BigIntFilter<"auction"> | bigint | number
  }

  export type auctionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiredAt?: SortOrder
    seller?: SortOrder
    itemId?: SortOrder
    price?: SortOrder
    tax?: SortOrder
  }

  export type auctionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: auctionWhereInput | auctionWhereInput[]
    OR?: auctionWhereInput[]
    NOT?: auctionWhereInput | auctionWhereInput[]
    createdAt?: DateTimeFilter<"auction"> | Date | string
    updatedAt?: DateTimeFilter<"auction"> | Date | string
    expiredAt?: DateTimeFilter<"auction"> | Date | string
    seller?: BigIntFilter<"auction"> | bigint | number
    itemId?: BigIntFilter<"auction"> | bigint | number
    price?: BigIntFilter<"auction"> | bigint | number
    tax?: BigIntFilter<"auction"> | bigint | number
  }, "id">

  export type auctionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiredAt?: SortOrder
    seller?: SortOrder
    itemId?: SortOrder
    price?: SortOrder
    tax?: SortOrder
    _count?: auctionCountOrderByAggregateInput
    _avg?: auctionAvgOrderByAggregateInput
    _max?: auctionMaxOrderByAggregateInput
    _min?: auctionMinOrderByAggregateInput
    _sum?: auctionSumOrderByAggregateInput
  }

  export type auctionScalarWhereWithAggregatesInput = {
    AND?: auctionScalarWhereWithAggregatesInput | auctionScalarWhereWithAggregatesInput[]
    OR?: auctionScalarWhereWithAggregatesInput[]
    NOT?: auctionScalarWhereWithAggregatesInput | auctionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"auction"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"auction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"auction"> | Date | string
    expiredAt?: DateTimeWithAggregatesFilter<"auction"> | Date | string
    seller?: BigIntWithAggregatesFilter<"auction"> | bigint | number
    itemId?: BigIntWithAggregatesFilter<"auction"> | bigint | number
    price?: BigIntWithAggregatesFilter<"auction"> | bigint | number
    tax?: BigIntWithAggregatesFilter<"auction"> | bigint | number
  }

  export type duckUserCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
    name?: string
    email?: string
    password?: string
    isDeleted?: boolean
  }

  export type duckUserUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
    name?: string
    email?: string
    password?: string
    isDeleted?: boolean
  }

  export type duckUserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type duckUserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type duckUserCreateManyInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
    name?: string
    email?: string
    password?: string
    isDeleted?: boolean
  }

  export type duckUserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type duckUserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type inventoryCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: bigint | number
    slotSize?: number
    level?: number
  }

  export type inventoryUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: bigint | number
    slotSize?: number
    level?: number
  }

  export type inventoryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    slotSize?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
  }

  export type inventoryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    slotSize?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
  }

  export type inventoryCreateManyInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: bigint | number
    slotSize?: number
    level?: number
  }

  export type inventoryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    slotSize?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
  }

  export type inventoryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    slotSize?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
  }

  export type ducksCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: bigint | number | null
    name?: string
    image?: string
    price?: bigint | number
  }

  export type ducksUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: bigint | number | null
    name?: string
    image?: string
    price?: bigint | number
  }

  export type ducksUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ducksUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ducksCreateManyInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: bigint | number | null
    name?: string
    image?: string
    price?: bigint | number
  }

  export type ducksUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ducksUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type tradeCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    auctionId: bigint | number
    receiver: bigint | number
  }

  export type tradeUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    auctionId: bigint | number
    receiver: bigint | number
  }

  export type tradeUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auctionId?: BigIntFieldUpdateOperationsInput | bigint | number
    receiver?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type tradeUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auctionId?: BigIntFieldUpdateOperationsInput | bigint | number
    receiver?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type tradeCreateManyInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    auctionId: bigint | number
    receiver: bigint | number
  }

  export type tradeUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auctionId?: BigIntFieldUpdateOperationsInput | bigint | number
    receiver?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type tradeUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auctionId?: BigIntFieldUpdateOperationsInput | bigint | number
    receiver?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type receiptCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    tradeId: bigint | number
    status?: number
  }

  export type receiptUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    tradeId: bigint | number
    status?: number
  }

  export type receiptUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradeId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: IntFieldUpdateOperationsInput | number
  }

  export type receiptUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradeId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: IntFieldUpdateOperationsInput | number
  }

  export type receiptCreateManyInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    tradeId: bigint | number
    status?: number
  }

  export type receiptUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradeId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: IntFieldUpdateOperationsInput | number
  }

  export type receiptUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradeId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: IntFieldUpdateOperationsInput | number
  }

  export type auctionCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    expiredAt?: Date | string
    seller: bigint | number
    itemId: bigint | number
    price: bigint | number
    tax: bigint | number
  }

  export type auctionUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    expiredAt?: Date | string
    seller: bigint | number
    itemId: bigint | number
    price: bigint | number
    tax: bigint | number
  }

  export type auctionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: BigIntFieldUpdateOperationsInput | bigint | number
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    tax?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type auctionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: BigIntFieldUpdateOperationsInput | bigint | number
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    tax?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type auctionCreateManyInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    expiredAt?: Date | string
    seller: bigint | number
    itemId: bigint | number
    price: bigint | number
    tax: bigint | number
  }

  export type auctionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: BigIntFieldUpdateOperationsInput | bigint | number
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    tax?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type auctionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: BigIntFieldUpdateOperationsInput | bigint | number
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    tax?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type duckUserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
  }

  export type duckUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type duckUserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
  }

  export type duckUserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
  }

  export type duckUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type inventoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    slotSize?: SortOrder
    level?: SortOrder
  }

  export type inventoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    slotSize?: SortOrder
    level?: SortOrder
  }

  export type inventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    slotSize?: SortOrder
    level?: SortOrder
  }

  export type inventoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    slotSize?: SortOrder
    level?: SortOrder
  }

  export type inventorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    slotSize?: SortOrder
    level?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ducksCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
  }

  export type ducksAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type ducksMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
  }

  export type ducksMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
  }

  export type ducksSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type tradeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auctionId?: SortOrder
    receiver?: SortOrder
  }

  export type tradeAvgOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    receiver?: SortOrder
  }

  export type tradeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auctionId?: SortOrder
    receiver?: SortOrder
  }

  export type tradeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auctionId?: SortOrder
    receiver?: SortOrder
  }

  export type tradeSumOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    receiver?: SortOrder
  }

  export type receiptCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tradeId?: SortOrder
    status?: SortOrder
  }

  export type receiptAvgOrderByAggregateInput = {
    id?: SortOrder
    tradeId?: SortOrder
    status?: SortOrder
  }

  export type receiptMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tradeId?: SortOrder
    status?: SortOrder
  }

  export type receiptMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tradeId?: SortOrder
    status?: SortOrder
  }

  export type receiptSumOrderByAggregateInput = {
    id?: SortOrder
    tradeId?: SortOrder
    status?: SortOrder
  }

  export type auctionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiredAt?: SortOrder
    seller?: SortOrder
    itemId?: SortOrder
    price?: SortOrder
    tax?: SortOrder
  }

  export type auctionAvgOrderByAggregateInput = {
    id?: SortOrder
    seller?: SortOrder
    itemId?: SortOrder
    price?: SortOrder
    tax?: SortOrder
  }

  export type auctionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiredAt?: SortOrder
    seller?: SortOrder
    itemId?: SortOrder
    price?: SortOrder
    tax?: SortOrder
  }

  export type auctionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiredAt?: SortOrder
    seller?: SortOrder
    itemId?: SortOrder
    price?: SortOrder
    tax?: SortOrder
  }

  export type auctionSumOrderByAggregateInput = {
    id?: SortOrder
    seller?: SortOrder
    itemId?: SortOrder
    price?: SortOrder
    tax?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use duckUserDefaultArgs instead
     */
    export type duckUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = duckUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use inventoryDefaultArgs instead
     */
    export type inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = inventoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ducksDefaultArgs instead
     */
    export type ducksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ducksDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tradeDefaultArgs instead
     */
    export type tradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tradeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use receiptDefaultArgs instead
     */
    export type receiptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = receiptDefaultArgs<ExtArgs>
    /**
     * @deprecated Use auctionDefaultArgs instead
     */
    export type auctionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = auctionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}