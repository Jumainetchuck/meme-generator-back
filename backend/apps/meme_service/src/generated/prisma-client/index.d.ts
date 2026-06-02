
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Meme
 * 
 */
export type Meme = $Result.DefaultSelection<Prisma.$MemePayload>
/**
 * Model TextLayer
 * 
 */
export type TextLayer = $Result.DefaultSelection<Prisma.$TextLayerPayload>
/**
 * Model Download
 * 
 */
export type Download = $Result.DefaultSelection<Prisma.$DownloadPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MemeVisibility: {
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
  TEMPORARY: 'TEMPORARY'
};

export type MemeVisibility = (typeof MemeVisibility)[keyof typeof MemeVisibility]


export const MemeStatus: {
  DRAFT: 'DRAFT',
  COMPLETED: 'COMPLETED',
  DELETED: 'DELETED'
};

export type MemeStatus = (typeof MemeStatus)[keyof typeof MemeStatus]

}

export type MemeVisibility = $Enums.MemeVisibility

export const MemeVisibility: typeof $Enums.MemeVisibility

export type MemeStatus = $Enums.MemeStatus

export const MemeStatus: typeof $Enums.MemeStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Memes
 * const memes = await prisma.meme.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Memes
   * const memes = await prisma.meme.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.meme`: Exposes CRUD operations for the **Meme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memes
    * const memes = await prisma.meme.findMany()
    * ```
    */
  get meme(): Prisma.MemeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.textLayer`: Exposes CRUD operations for the **TextLayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TextLayers
    * const textLayers = await prisma.textLayer.findMany()
    * ```
    */
  get textLayer(): Prisma.TextLayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.download`: Exposes CRUD operations for the **Download** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Downloads
    * const downloads = await prisma.download.findMany()
    * ```
    */
  get download(): Prisma.DownloadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Meme: 'Meme',
    TextLayer: 'TextLayer',
    Download: 'Download',
    Template: 'Template'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "meme" | "textLayer" | "download" | "template"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Meme: {
        payload: Prisma.$MemePayload<ExtArgs>
        fields: Prisma.MemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload>
          }
          findFirst: {
            args: Prisma.MemeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload>
          }
          findMany: {
            args: Prisma.MemeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload>[]
          }
          create: {
            args: Prisma.MemeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload>
          }
          createMany: {
            args: Prisma.MemeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MemeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload>
          }
          update: {
            args: Prisma.MemeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload>
          }
          deleteMany: {
            args: Prisma.MemeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload>
          }
          aggregate: {
            args: Prisma.MemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeme>
          }
          groupBy: {
            args: Prisma.MemeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemeCountArgs<ExtArgs>
            result: $Utils.Optional<MemeCountAggregateOutputType> | number
          }
        }
      }
      TextLayer: {
        payload: Prisma.$TextLayerPayload<ExtArgs>
        fields: Prisma.TextLayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TextLayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextLayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TextLayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextLayerPayload>
          }
          findFirst: {
            args: Prisma.TextLayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextLayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TextLayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextLayerPayload>
          }
          findMany: {
            args: Prisma.TextLayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextLayerPayload>[]
          }
          create: {
            args: Prisma.TextLayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextLayerPayload>
          }
          createMany: {
            args: Prisma.TextLayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TextLayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextLayerPayload>
          }
          update: {
            args: Prisma.TextLayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextLayerPayload>
          }
          deleteMany: {
            args: Prisma.TextLayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TextLayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TextLayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextLayerPayload>
          }
          aggregate: {
            args: Prisma.TextLayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTextLayer>
          }
          groupBy: {
            args: Prisma.TextLayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TextLayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TextLayerCountArgs<ExtArgs>
            result: $Utils.Optional<TextLayerCountAggregateOutputType> | number
          }
        }
      }
      Download: {
        payload: Prisma.$DownloadPayload<ExtArgs>
        fields: Prisma.DownloadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DownloadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DownloadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload>
          }
          findFirst: {
            args: Prisma.DownloadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DownloadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload>
          }
          findMany: {
            args: Prisma.DownloadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload>[]
          }
          create: {
            args: Prisma.DownloadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload>
          }
          createMany: {
            args: Prisma.DownloadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DownloadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload>
          }
          update: {
            args: Prisma.DownloadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload>
          }
          deleteMany: {
            args: Prisma.DownloadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DownloadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DownloadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload>
          }
          aggregate: {
            args: Prisma.DownloadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDownload>
          }
          groupBy: {
            args: Prisma.DownloadGroupByArgs<ExtArgs>
            result: $Utils.Optional<DownloadGroupByOutputType>[]
          }
          count: {
            args: Prisma.DownloadCountArgs<ExtArgs>
            result: $Utils.Optional<DownloadCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    meme?: MemeOmit
    textLayer?: TextLayerOmit
    download?: DownloadOmit
    template?: TemplateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type MemeCountOutputType
   */

  export type MemeCountOutputType = {
    textLayers: number
    downloads: number
  }

  export type MemeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    textLayers?: boolean | MemeCountOutputTypeCountTextLayersArgs
    downloads?: boolean | MemeCountOutputTypeCountDownloadsArgs
  }

  // Custom InputTypes
  /**
   * MemeCountOutputType without action
   */
  export type MemeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeCountOutputType
     */
    select?: MemeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemeCountOutputType without action
   */
  export type MemeCountOutputTypeCountTextLayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextLayerWhereInput
  }

  /**
   * MemeCountOutputType without action
   */
  export type MemeCountOutputTypeCountDownloadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DownloadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Meme
   */

  export type AggregateMeme = {
    _count: MemeCountAggregateOutputType | null
    _avg: MemeAvgAggregateOutputType | null
    _sum: MemeSumAggregateOutputType | null
    _min: MemeMinAggregateOutputType | null
    _max: MemeMaxAggregateOutputType | null
  }

  export type MemeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MemeSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MemeMinAggregateOutputType = {
    id: number | null
    title: string | null
    imageUrl: string | null
    userId: number | null
    sessionId: string | null
    visibility: $Enums.MemeVisibility | null
    status: $Enums.MemeStatus | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    imageUrl: string | null
    userId: number | null
    sessionId: string | null
    visibility: $Enums.MemeVisibility | null
    status: $Enums.MemeStatus | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemeCountAggregateOutputType = {
    id: number
    title: number
    imageUrl: number
    userId: number
    sessionId: number
    visibility: number
    status: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemeAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MemeSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MemeMinAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    userId?: true
    sessionId?: true
    visibility?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemeMaxAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    userId?: true
    sessionId?: true
    visibility?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemeCountAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    userId?: true
    sessionId?: true
    visibility?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meme to aggregate.
     */
    where?: MemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memes to fetch.
     */
    orderBy?: MemeOrderByWithRelationInput | MemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Memes
    **/
    _count?: true | MemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemeMaxAggregateInputType
  }

  export type GetMemeAggregateType<T extends MemeAggregateArgs> = {
        [P in keyof T & keyof AggregateMeme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeme[P]>
      : GetScalarType<T[P], AggregateMeme[P]>
  }




  export type MemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemeWhereInput
    orderBy?: MemeOrderByWithAggregationInput | MemeOrderByWithAggregationInput[]
    by: MemeScalarFieldEnum[] | MemeScalarFieldEnum
    having?: MemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemeCountAggregateInputType | true
    _avg?: MemeAvgAggregateInputType
    _sum?: MemeSumAggregateInputType
    _min?: MemeMinAggregateInputType
    _max?: MemeMaxAggregateInputType
  }

  export type MemeGroupByOutputType = {
    id: number
    title: string
    imageUrl: string
    userId: number | null
    sessionId: string | null
    visibility: $Enums.MemeVisibility
    status: $Enums.MemeStatus
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: MemeCountAggregateOutputType | null
    _avg: MemeAvgAggregateOutputType | null
    _sum: MemeSumAggregateOutputType | null
    _min: MemeMinAggregateOutputType | null
    _max: MemeMaxAggregateOutputType | null
  }

  type GetMemeGroupByPayload<T extends MemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemeGroupByOutputType[P]>
            : GetScalarType<T[P], MemeGroupByOutputType[P]>
        }
      >
    >


  export type MemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    userId?: boolean
    sessionId?: boolean
    visibility?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    textLayers?: boolean | Meme$textLayersArgs<ExtArgs>
    downloads?: boolean | Meme$downloadsArgs<ExtArgs>
    _count?: boolean | MemeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meme"]>



  export type MemeSelectScalar = {
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    userId?: boolean
    sessionId?: boolean
    visibility?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "imageUrl" | "userId" | "sessionId" | "visibility" | "status" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["meme"]>
  export type MemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    textLayers?: boolean | Meme$textLayersArgs<ExtArgs>
    downloads?: boolean | Meme$downloadsArgs<ExtArgs>
    _count?: boolean | MemeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meme"
    objects: {
      textLayers: Prisma.$TextLayerPayload<ExtArgs>[]
      downloads: Prisma.$DownloadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      imageUrl: string
      userId: number | null
      sessionId: string | null
      visibility: $Enums.MemeVisibility
      status: $Enums.MemeStatus
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meme"]>
    composites: {}
  }

  type MemeGetPayload<S extends boolean | null | undefined | MemeDefaultArgs> = $Result.GetResult<Prisma.$MemePayload, S>

  type MemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemeCountAggregateInputType | true
    }

  export interface MemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meme'], meta: { name: 'Meme' } }
    /**
     * Find zero or one Meme that matches the filter.
     * @param {MemeFindUniqueArgs} args - Arguments to find a Meme
     * @example
     * // Get one Meme
     * const meme = await prisma.meme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemeFindUniqueArgs>(args: SelectSubset<T, MemeFindUniqueArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemeFindUniqueOrThrowArgs} args - Arguments to find a Meme
     * @example
     * // Get one Meme
     * const meme = await prisma.meme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemeFindUniqueOrThrowArgs>(args: SelectSubset<T, MemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeFindFirstArgs} args - Arguments to find a Meme
     * @example
     * // Get one Meme
     * const meme = await prisma.meme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemeFindFirstArgs>(args?: SelectSubset<T, MemeFindFirstArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeFindFirstOrThrowArgs} args - Arguments to find a Meme
     * @example
     * // Get one Meme
     * const meme = await prisma.meme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemeFindFirstOrThrowArgs>(args?: SelectSubset<T, MemeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Memes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memes
     * const memes = await prisma.meme.findMany()
     * 
     * // Get first 10 Memes
     * const memes = await prisma.meme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memeWithIdOnly = await prisma.meme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemeFindManyArgs>(args?: SelectSubset<T, MemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meme.
     * @param {MemeCreateArgs} args - Arguments to create a Meme.
     * @example
     * // Create one Meme
     * const Meme = await prisma.meme.create({
     *   data: {
     *     // ... data to create a Meme
     *   }
     * })
     * 
     */
    create<T extends MemeCreateArgs>(args: SelectSubset<T, MemeCreateArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Memes.
     * @param {MemeCreateManyArgs} args - Arguments to create many Memes.
     * @example
     * // Create many Memes
     * const meme = await prisma.meme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemeCreateManyArgs>(args?: SelectSubset<T, MemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meme.
     * @param {MemeDeleteArgs} args - Arguments to delete one Meme.
     * @example
     * // Delete one Meme
     * const Meme = await prisma.meme.delete({
     *   where: {
     *     // ... filter to delete one Meme
     *   }
     * })
     * 
     */
    delete<T extends MemeDeleteArgs>(args: SelectSubset<T, MemeDeleteArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meme.
     * @param {MemeUpdateArgs} args - Arguments to update one Meme.
     * @example
     * // Update one Meme
     * const meme = await prisma.meme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemeUpdateArgs>(args: SelectSubset<T, MemeUpdateArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Memes.
     * @param {MemeDeleteManyArgs} args - Arguments to filter Memes to delete.
     * @example
     * // Delete a few Memes
     * const { count } = await prisma.meme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemeDeleteManyArgs>(args?: SelectSubset<T, MemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memes
     * const meme = await prisma.meme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemeUpdateManyArgs>(args: SelectSubset<T, MemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meme.
     * @param {MemeUpsertArgs} args - Arguments to update or create a Meme.
     * @example
     * // Update or create a Meme
     * const meme = await prisma.meme.upsert({
     *   create: {
     *     // ... data to create a Meme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meme we want to update
     *   }
     * })
     */
    upsert<T extends MemeUpsertArgs>(args: SelectSubset<T, MemeUpsertArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Memes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeCountArgs} args - Arguments to filter Memes to count.
     * @example
     * // Count the number of Memes
     * const count = await prisma.meme.count({
     *   where: {
     *     // ... the filter for the Memes we want to count
     *   }
     * })
    **/
    count<T extends MemeCountArgs>(
      args?: Subset<T, MemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemeAggregateArgs>(args: Subset<T, MemeAggregateArgs>): Prisma.PrismaPromise<GetMemeAggregateType<T>>

    /**
     * Group by Meme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeGroupByArgs} args - Group by arguments.
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
      T extends MemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemeGroupByArgs['orderBy'] }
        : { orderBy?: MemeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meme model
   */
  readonly fields: MemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    textLayers<T extends Meme$textLayersArgs<ExtArgs> = {}>(args?: Subset<T, Meme$textLayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextLayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    downloads<T extends Meme$downloadsArgs<ExtArgs> = {}>(args?: Subset<T, Meme$downloadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Meme model
   */
  interface MemeFieldRefs {
    readonly id: FieldRef<"Meme", 'Int'>
    readonly title: FieldRef<"Meme", 'String'>
    readonly imageUrl: FieldRef<"Meme", 'String'>
    readonly userId: FieldRef<"Meme", 'Int'>
    readonly sessionId: FieldRef<"Meme", 'String'>
    readonly visibility: FieldRef<"Meme", 'MemeVisibility'>
    readonly status: FieldRef<"Meme", 'MemeStatus'>
    readonly expiresAt: FieldRef<"Meme", 'DateTime'>
    readonly createdAt: FieldRef<"Meme", 'DateTime'>
    readonly updatedAt: FieldRef<"Meme", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meme findUnique
   */
  export type MemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * Filter, which Meme to fetch.
     */
    where: MemeWhereUniqueInput
  }

  /**
   * Meme findUniqueOrThrow
   */
  export type MemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * Filter, which Meme to fetch.
     */
    where: MemeWhereUniqueInput
  }

  /**
   * Meme findFirst
   */
  export type MemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * Filter, which Meme to fetch.
     */
    where?: MemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memes to fetch.
     */
    orderBy?: MemeOrderByWithRelationInput | MemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memes.
     */
    cursor?: MemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memes.
     */
    distinct?: MemeScalarFieldEnum | MemeScalarFieldEnum[]
  }

  /**
   * Meme findFirstOrThrow
   */
  export type MemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * Filter, which Meme to fetch.
     */
    where?: MemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memes to fetch.
     */
    orderBy?: MemeOrderByWithRelationInput | MemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memes.
     */
    cursor?: MemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memes.
     */
    distinct?: MemeScalarFieldEnum | MemeScalarFieldEnum[]
  }

  /**
   * Meme findMany
   */
  export type MemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * Filter, which Memes to fetch.
     */
    where?: MemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memes to fetch.
     */
    orderBy?: MemeOrderByWithRelationInput | MemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Memes.
     */
    cursor?: MemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memes.
     */
    distinct?: MemeScalarFieldEnum | MemeScalarFieldEnum[]
  }

  /**
   * Meme create
   */
  export type MemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * The data needed to create a Meme.
     */
    data: XOR<MemeCreateInput, MemeUncheckedCreateInput>
  }

  /**
   * Meme createMany
   */
  export type MemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Memes.
     */
    data: MemeCreateManyInput | MemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meme update
   */
  export type MemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * The data needed to update a Meme.
     */
    data: XOR<MemeUpdateInput, MemeUncheckedUpdateInput>
    /**
     * Choose, which Meme to update.
     */
    where: MemeWhereUniqueInput
  }

  /**
   * Meme updateMany
   */
  export type MemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Memes.
     */
    data: XOR<MemeUpdateManyMutationInput, MemeUncheckedUpdateManyInput>
    /**
     * Filter which Memes to update
     */
    where?: MemeWhereInput
    /**
     * Limit how many Memes to update.
     */
    limit?: number
  }

  /**
   * Meme upsert
   */
  export type MemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * The filter to search for the Meme to update in case it exists.
     */
    where: MemeWhereUniqueInput
    /**
     * In case the Meme found by the `where` argument doesn't exist, create a new Meme with this data.
     */
    create: XOR<MemeCreateInput, MemeUncheckedCreateInput>
    /**
     * In case the Meme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemeUpdateInput, MemeUncheckedUpdateInput>
  }

  /**
   * Meme delete
   */
  export type MemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * Filter which Meme to delete.
     */
    where: MemeWhereUniqueInput
  }

  /**
   * Meme deleteMany
   */
  export type MemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memes to delete
     */
    where?: MemeWhereInput
    /**
     * Limit how many Memes to delete.
     */
    limit?: number
  }

  /**
   * Meme.textLayers
   */
  export type Meme$textLayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextLayer
     */
    select?: TextLayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextLayer
     */
    omit?: TextLayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextLayerInclude<ExtArgs> | null
    where?: TextLayerWhereInput
    orderBy?: TextLayerOrderByWithRelationInput | TextLayerOrderByWithRelationInput[]
    cursor?: TextLayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TextLayerScalarFieldEnum | TextLayerScalarFieldEnum[]
  }

  /**
   * Meme.downloads
   */
  export type Meme$downloadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DownloadInclude<ExtArgs> | null
    where?: DownloadWhereInput
    orderBy?: DownloadOrderByWithRelationInput | DownloadOrderByWithRelationInput[]
    cursor?: DownloadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DownloadScalarFieldEnum | DownloadScalarFieldEnum[]
  }

  /**
   * Meme without action
   */
  export type MemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
  }


  /**
   * Model TextLayer
   */

  export type AggregateTextLayer = {
    _count: TextLayerCountAggregateOutputType | null
    _avg: TextLayerAvgAggregateOutputType | null
    _sum: TextLayerSumAggregateOutputType | null
    _min: TextLayerMinAggregateOutputType | null
    _max: TextLayerMaxAggregateOutputType | null
  }

  export type TextLayerAvgAggregateOutputType = {
    id: number | null
    memeId: number | null
    xPosition: number | null
    yPosition: number | null
    fontSize: number | null
    rotation: number | null
    zIndex: number | null
  }

  export type TextLayerSumAggregateOutputType = {
    id: number | null
    memeId: number | null
    xPosition: number | null
    yPosition: number | null
    fontSize: number | null
    rotation: number | null
    zIndex: number | null
  }

  export type TextLayerMinAggregateOutputType = {
    id: number | null
    memeId: number | null
    content: string | null
    xPosition: number | null
    yPosition: number | null
    fontSize: number | null
    fontFamily: string | null
    color: string | null
    strokeColor: string | null
    rotation: number | null
    zIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TextLayerMaxAggregateOutputType = {
    id: number | null
    memeId: number | null
    content: string | null
    xPosition: number | null
    yPosition: number | null
    fontSize: number | null
    fontFamily: string | null
    color: string | null
    strokeColor: string | null
    rotation: number | null
    zIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TextLayerCountAggregateOutputType = {
    id: number
    memeId: number
    content: number
    xPosition: number
    yPosition: number
    fontSize: number
    fontFamily: number
    color: number
    strokeColor: number
    rotation: number
    zIndex: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TextLayerAvgAggregateInputType = {
    id?: true
    memeId?: true
    xPosition?: true
    yPosition?: true
    fontSize?: true
    rotation?: true
    zIndex?: true
  }

  export type TextLayerSumAggregateInputType = {
    id?: true
    memeId?: true
    xPosition?: true
    yPosition?: true
    fontSize?: true
    rotation?: true
    zIndex?: true
  }

  export type TextLayerMinAggregateInputType = {
    id?: true
    memeId?: true
    content?: true
    xPosition?: true
    yPosition?: true
    fontSize?: true
    fontFamily?: true
    color?: true
    strokeColor?: true
    rotation?: true
    zIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TextLayerMaxAggregateInputType = {
    id?: true
    memeId?: true
    content?: true
    xPosition?: true
    yPosition?: true
    fontSize?: true
    fontFamily?: true
    color?: true
    strokeColor?: true
    rotation?: true
    zIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TextLayerCountAggregateInputType = {
    id?: true
    memeId?: true
    content?: true
    xPosition?: true
    yPosition?: true
    fontSize?: true
    fontFamily?: true
    color?: true
    strokeColor?: true
    rotation?: true
    zIndex?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TextLayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TextLayer to aggregate.
     */
    where?: TextLayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextLayers to fetch.
     */
    orderBy?: TextLayerOrderByWithRelationInput | TextLayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TextLayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextLayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextLayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TextLayers
    **/
    _count?: true | TextLayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TextLayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TextLayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TextLayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TextLayerMaxAggregateInputType
  }

  export type GetTextLayerAggregateType<T extends TextLayerAggregateArgs> = {
        [P in keyof T & keyof AggregateTextLayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTextLayer[P]>
      : GetScalarType<T[P], AggregateTextLayer[P]>
  }




  export type TextLayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextLayerWhereInput
    orderBy?: TextLayerOrderByWithAggregationInput | TextLayerOrderByWithAggregationInput[]
    by: TextLayerScalarFieldEnum[] | TextLayerScalarFieldEnum
    having?: TextLayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TextLayerCountAggregateInputType | true
    _avg?: TextLayerAvgAggregateInputType
    _sum?: TextLayerSumAggregateInputType
    _min?: TextLayerMinAggregateInputType
    _max?: TextLayerMaxAggregateInputType
  }

  export type TextLayerGroupByOutputType = {
    id: number
    memeId: number
    content: string
    xPosition: number
    yPosition: number
    fontSize: number
    fontFamily: string
    color: string
    strokeColor: string
    rotation: number
    zIndex: number
    createdAt: Date
    updatedAt: Date
    _count: TextLayerCountAggregateOutputType | null
    _avg: TextLayerAvgAggregateOutputType | null
    _sum: TextLayerSumAggregateOutputType | null
    _min: TextLayerMinAggregateOutputType | null
    _max: TextLayerMaxAggregateOutputType | null
  }

  type GetTextLayerGroupByPayload<T extends TextLayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TextLayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TextLayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TextLayerGroupByOutputType[P]>
            : GetScalarType<T[P], TextLayerGroupByOutputType[P]>
        }
      >
    >


  export type TextLayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memeId?: boolean
    content?: boolean
    xPosition?: boolean
    yPosition?: boolean
    fontSize?: boolean
    fontFamily?: boolean
    color?: boolean
    strokeColor?: boolean
    rotation?: boolean
    zIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meme?: boolean | MemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["textLayer"]>



  export type TextLayerSelectScalar = {
    id?: boolean
    memeId?: boolean
    content?: boolean
    xPosition?: boolean
    yPosition?: boolean
    fontSize?: boolean
    fontFamily?: boolean
    color?: boolean
    strokeColor?: boolean
    rotation?: boolean
    zIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TextLayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memeId" | "content" | "xPosition" | "yPosition" | "fontSize" | "fontFamily" | "color" | "strokeColor" | "rotation" | "zIndex" | "createdAt" | "updatedAt", ExtArgs["result"]["textLayer"]>
  export type TextLayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meme?: boolean | MemeDefaultArgs<ExtArgs>
  }

  export type $TextLayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TextLayer"
    objects: {
      meme: Prisma.$MemePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      memeId: number
      content: string
      xPosition: number
      yPosition: number
      fontSize: number
      fontFamily: string
      color: string
      strokeColor: string
      rotation: number
      zIndex: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["textLayer"]>
    composites: {}
  }

  type TextLayerGetPayload<S extends boolean | null | undefined | TextLayerDefaultArgs> = $Result.GetResult<Prisma.$TextLayerPayload, S>

  type TextLayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TextLayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TextLayerCountAggregateInputType | true
    }

  export interface TextLayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TextLayer'], meta: { name: 'TextLayer' } }
    /**
     * Find zero or one TextLayer that matches the filter.
     * @param {TextLayerFindUniqueArgs} args - Arguments to find a TextLayer
     * @example
     * // Get one TextLayer
     * const textLayer = await prisma.textLayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TextLayerFindUniqueArgs>(args: SelectSubset<T, TextLayerFindUniqueArgs<ExtArgs>>): Prisma__TextLayerClient<$Result.GetResult<Prisma.$TextLayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TextLayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TextLayerFindUniqueOrThrowArgs} args - Arguments to find a TextLayer
     * @example
     * // Get one TextLayer
     * const textLayer = await prisma.textLayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TextLayerFindUniqueOrThrowArgs>(args: SelectSubset<T, TextLayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TextLayerClient<$Result.GetResult<Prisma.$TextLayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TextLayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextLayerFindFirstArgs} args - Arguments to find a TextLayer
     * @example
     * // Get one TextLayer
     * const textLayer = await prisma.textLayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TextLayerFindFirstArgs>(args?: SelectSubset<T, TextLayerFindFirstArgs<ExtArgs>>): Prisma__TextLayerClient<$Result.GetResult<Prisma.$TextLayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TextLayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextLayerFindFirstOrThrowArgs} args - Arguments to find a TextLayer
     * @example
     * // Get one TextLayer
     * const textLayer = await prisma.textLayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TextLayerFindFirstOrThrowArgs>(args?: SelectSubset<T, TextLayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TextLayerClient<$Result.GetResult<Prisma.$TextLayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TextLayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextLayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TextLayers
     * const textLayers = await prisma.textLayer.findMany()
     * 
     * // Get first 10 TextLayers
     * const textLayers = await prisma.textLayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const textLayerWithIdOnly = await prisma.textLayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TextLayerFindManyArgs>(args?: SelectSubset<T, TextLayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextLayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TextLayer.
     * @param {TextLayerCreateArgs} args - Arguments to create a TextLayer.
     * @example
     * // Create one TextLayer
     * const TextLayer = await prisma.textLayer.create({
     *   data: {
     *     // ... data to create a TextLayer
     *   }
     * })
     * 
     */
    create<T extends TextLayerCreateArgs>(args: SelectSubset<T, TextLayerCreateArgs<ExtArgs>>): Prisma__TextLayerClient<$Result.GetResult<Prisma.$TextLayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TextLayers.
     * @param {TextLayerCreateManyArgs} args - Arguments to create many TextLayers.
     * @example
     * // Create many TextLayers
     * const textLayer = await prisma.textLayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TextLayerCreateManyArgs>(args?: SelectSubset<T, TextLayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TextLayer.
     * @param {TextLayerDeleteArgs} args - Arguments to delete one TextLayer.
     * @example
     * // Delete one TextLayer
     * const TextLayer = await prisma.textLayer.delete({
     *   where: {
     *     // ... filter to delete one TextLayer
     *   }
     * })
     * 
     */
    delete<T extends TextLayerDeleteArgs>(args: SelectSubset<T, TextLayerDeleteArgs<ExtArgs>>): Prisma__TextLayerClient<$Result.GetResult<Prisma.$TextLayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TextLayer.
     * @param {TextLayerUpdateArgs} args - Arguments to update one TextLayer.
     * @example
     * // Update one TextLayer
     * const textLayer = await prisma.textLayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TextLayerUpdateArgs>(args: SelectSubset<T, TextLayerUpdateArgs<ExtArgs>>): Prisma__TextLayerClient<$Result.GetResult<Prisma.$TextLayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TextLayers.
     * @param {TextLayerDeleteManyArgs} args - Arguments to filter TextLayers to delete.
     * @example
     * // Delete a few TextLayers
     * const { count } = await prisma.textLayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TextLayerDeleteManyArgs>(args?: SelectSubset<T, TextLayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TextLayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextLayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TextLayers
     * const textLayer = await prisma.textLayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TextLayerUpdateManyArgs>(args: SelectSubset<T, TextLayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TextLayer.
     * @param {TextLayerUpsertArgs} args - Arguments to update or create a TextLayer.
     * @example
     * // Update or create a TextLayer
     * const textLayer = await prisma.textLayer.upsert({
     *   create: {
     *     // ... data to create a TextLayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TextLayer we want to update
     *   }
     * })
     */
    upsert<T extends TextLayerUpsertArgs>(args: SelectSubset<T, TextLayerUpsertArgs<ExtArgs>>): Prisma__TextLayerClient<$Result.GetResult<Prisma.$TextLayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TextLayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextLayerCountArgs} args - Arguments to filter TextLayers to count.
     * @example
     * // Count the number of TextLayers
     * const count = await prisma.textLayer.count({
     *   where: {
     *     // ... the filter for the TextLayers we want to count
     *   }
     * })
    **/
    count<T extends TextLayerCountArgs>(
      args?: Subset<T, TextLayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TextLayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TextLayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextLayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TextLayerAggregateArgs>(args: Subset<T, TextLayerAggregateArgs>): Prisma.PrismaPromise<GetTextLayerAggregateType<T>>

    /**
     * Group by TextLayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextLayerGroupByArgs} args - Group by arguments.
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
      T extends TextLayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TextLayerGroupByArgs['orderBy'] }
        : { orderBy?: TextLayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TextLayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTextLayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TextLayer model
   */
  readonly fields: TextLayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TextLayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TextLayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meme<T extends MemeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemeDefaultArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TextLayer model
   */
  interface TextLayerFieldRefs {
    readonly id: FieldRef<"TextLayer", 'Int'>
    readonly memeId: FieldRef<"TextLayer", 'Int'>
    readonly content: FieldRef<"TextLayer", 'String'>
    readonly xPosition: FieldRef<"TextLayer", 'Float'>
    readonly yPosition: FieldRef<"TextLayer", 'Float'>
    readonly fontSize: FieldRef<"TextLayer", 'Int'>
    readonly fontFamily: FieldRef<"TextLayer", 'String'>
    readonly color: FieldRef<"TextLayer", 'String'>
    readonly strokeColor: FieldRef<"TextLayer", 'String'>
    readonly rotation: FieldRef<"TextLayer", 'Float'>
    readonly zIndex: FieldRef<"TextLayer", 'Int'>
    readonly createdAt: FieldRef<"TextLayer", 'DateTime'>
    readonly updatedAt: FieldRef<"TextLayer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TextLayer findUnique
   */
  export type TextLayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextLayer
     */
    select?: TextLayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextLayer
     */
    omit?: TextLayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextLayerInclude<ExtArgs> | null
    /**
     * Filter, which TextLayer to fetch.
     */
    where: TextLayerWhereUniqueInput
  }

  /**
   * TextLayer findUniqueOrThrow
   */
  export type TextLayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextLayer
     */
    select?: TextLayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextLayer
     */
    omit?: TextLayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextLayerInclude<ExtArgs> | null
    /**
     * Filter, which TextLayer to fetch.
     */
    where: TextLayerWhereUniqueInput
  }

  /**
   * TextLayer findFirst
   */
  export type TextLayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextLayer
     */
    select?: TextLayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextLayer
     */
    omit?: TextLayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextLayerInclude<ExtArgs> | null
    /**
     * Filter, which TextLayer to fetch.
     */
    where?: TextLayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextLayers to fetch.
     */
    orderBy?: TextLayerOrderByWithRelationInput | TextLayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TextLayers.
     */
    cursor?: TextLayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextLayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextLayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TextLayers.
     */
    distinct?: TextLayerScalarFieldEnum | TextLayerScalarFieldEnum[]
  }

  /**
   * TextLayer findFirstOrThrow
   */
  export type TextLayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextLayer
     */
    select?: TextLayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextLayer
     */
    omit?: TextLayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextLayerInclude<ExtArgs> | null
    /**
     * Filter, which TextLayer to fetch.
     */
    where?: TextLayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextLayers to fetch.
     */
    orderBy?: TextLayerOrderByWithRelationInput | TextLayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TextLayers.
     */
    cursor?: TextLayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextLayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextLayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TextLayers.
     */
    distinct?: TextLayerScalarFieldEnum | TextLayerScalarFieldEnum[]
  }

  /**
   * TextLayer findMany
   */
  export type TextLayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextLayer
     */
    select?: TextLayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextLayer
     */
    omit?: TextLayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextLayerInclude<ExtArgs> | null
    /**
     * Filter, which TextLayers to fetch.
     */
    where?: TextLayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextLayers to fetch.
     */
    orderBy?: TextLayerOrderByWithRelationInput | TextLayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TextLayers.
     */
    cursor?: TextLayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextLayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextLayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TextLayers.
     */
    distinct?: TextLayerScalarFieldEnum | TextLayerScalarFieldEnum[]
  }

  /**
   * TextLayer create
   */
  export type TextLayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextLayer
     */
    select?: TextLayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextLayer
     */
    omit?: TextLayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextLayerInclude<ExtArgs> | null
    /**
     * The data needed to create a TextLayer.
     */
    data: XOR<TextLayerCreateInput, TextLayerUncheckedCreateInput>
  }

  /**
   * TextLayer createMany
   */
  export type TextLayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TextLayers.
     */
    data: TextLayerCreateManyInput | TextLayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TextLayer update
   */
  export type TextLayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextLayer
     */
    select?: TextLayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextLayer
     */
    omit?: TextLayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextLayerInclude<ExtArgs> | null
    /**
     * The data needed to update a TextLayer.
     */
    data: XOR<TextLayerUpdateInput, TextLayerUncheckedUpdateInput>
    /**
     * Choose, which TextLayer to update.
     */
    where: TextLayerWhereUniqueInput
  }

  /**
   * TextLayer updateMany
   */
  export type TextLayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TextLayers.
     */
    data: XOR<TextLayerUpdateManyMutationInput, TextLayerUncheckedUpdateManyInput>
    /**
     * Filter which TextLayers to update
     */
    where?: TextLayerWhereInput
    /**
     * Limit how many TextLayers to update.
     */
    limit?: number
  }

  /**
   * TextLayer upsert
   */
  export type TextLayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextLayer
     */
    select?: TextLayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextLayer
     */
    omit?: TextLayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextLayerInclude<ExtArgs> | null
    /**
     * The filter to search for the TextLayer to update in case it exists.
     */
    where: TextLayerWhereUniqueInput
    /**
     * In case the TextLayer found by the `where` argument doesn't exist, create a new TextLayer with this data.
     */
    create: XOR<TextLayerCreateInput, TextLayerUncheckedCreateInput>
    /**
     * In case the TextLayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TextLayerUpdateInput, TextLayerUncheckedUpdateInput>
  }

  /**
   * TextLayer delete
   */
  export type TextLayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextLayer
     */
    select?: TextLayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextLayer
     */
    omit?: TextLayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextLayerInclude<ExtArgs> | null
    /**
     * Filter which TextLayer to delete.
     */
    where: TextLayerWhereUniqueInput
  }

  /**
   * TextLayer deleteMany
   */
  export type TextLayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TextLayers to delete
     */
    where?: TextLayerWhereInput
    /**
     * Limit how many TextLayers to delete.
     */
    limit?: number
  }

  /**
   * TextLayer without action
   */
  export type TextLayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextLayer
     */
    select?: TextLayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextLayer
     */
    omit?: TextLayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextLayerInclude<ExtArgs> | null
  }


  /**
   * Model Download
   */

  export type AggregateDownload = {
    _count: DownloadCountAggregateOutputType | null
    _avg: DownloadAvgAggregateOutputType | null
    _sum: DownloadSumAggregateOutputType | null
    _min: DownloadMinAggregateOutputType | null
    _max: DownloadMaxAggregateOutputType | null
  }

  export type DownloadAvgAggregateOutputType = {
    id: number | null
    memeId: number | null
    userId: number | null
  }

  export type DownloadSumAggregateOutputType = {
    id: number | null
    memeId: number | null
    userId: number | null
  }

  export type DownloadMinAggregateOutputType = {
    id: number | null
    memeId: number | null
    userId: number | null
    sessionId: string | null
    downloadedAt: Date | null
  }

  export type DownloadMaxAggregateOutputType = {
    id: number | null
    memeId: number | null
    userId: number | null
    sessionId: string | null
    downloadedAt: Date | null
  }

  export type DownloadCountAggregateOutputType = {
    id: number
    memeId: number
    userId: number
    sessionId: number
    downloadedAt: number
    _all: number
  }


  export type DownloadAvgAggregateInputType = {
    id?: true
    memeId?: true
    userId?: true
  }

  export type DownloadSumAggregateInputType = {
    id?: true
    memeId?: true
    userId?: true
  }

  export type DownloadMinAggregateInputType = {
    id?: true
    memeId?: true
    userId?: true
    sessionId?: true
    downloadedAt?: true
  }

  export type DownloadMaxAggregateInputType = {
    id?: true
    memeId?: true
    userId?: true
    sessionId?: true
    downloadedAt?: true
  }

  export type DownloadCountAggregateInputType = {
    id?: true
    memeId?: true
    userId?: true
    sessionId?: true
    downloadedAt?: true
    _all?: true
  }

  export type DownloadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Download to aggregate.
     */
    where?: DownloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Downloads to fetch.
     */
    orderBy?: DownloadOrderByWithRelationInput | DownloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DownloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Downloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Downloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Downloads
    **/
    _count?: true | DownloadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DownloadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DownloadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DownloadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DownloadMaxAggregateInputType
  }

  export type GetDownloadAggregateType<T extends DownloadAggregateArgs> = {
        [P in keyof T & keyof AggregateDownload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDownload[P]>
      : GetScalarType<T[P], AggregateDownload[P]>
  }




  export type DownloadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DownloadWhereInput
    orderBy?: DownloadOrderByWithAggregationInput | DownloadOrderByWithAggregationInput[]
    by: DownloadScalarFieldEnum[] | DownloadScalarFieldEnum
    having?: DownloadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DownloadCountAggregateInputType | true
    _avg?: DownloadAvgAggregateInputType
    _sum?: DownloadSumAggregateInputType
    _min?: DownloadMinAggregateInputType
    _max?: DownloadMaxAggregateInputType
  }

  export type DownloadGroupByOutputType = {
    id: number
    memeId: number
    userId: number | null
    sessionId: string | null
    downloadedAt: Date
    _count: DownloadCountAggregateOutputType | null
    _avg: DownloadAvgAggregateOutputType | null
    _sum: DownloadSumAggregateOutputType | null
    _min: DownloadMinAggregateOutputType | null
    _max: DownloadMaxAggregateOutputType | null
  }

  type GetDownloadGroupByPayload<T extends DownloadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DownloadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DownloadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DownloadGroupByOutputType[P]>
            : GetScalarType<T[P], DownloadGroupByOutputType[P]>
        }
      >
    >


  export type DownloadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memeId?: boolean
    userId?: boolean
    sessionId?: boolean
    downloadedAt?: boolean
    meme?: boolean | MemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["download"]>



  export type DownloadSelectScalar = {
    id?: boolean
    memeId?: boolean
    userId?: boolean
    sessionId?: boolean
    downloadedAt?: boolean
  }

  export type DownloadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memeId" | "userId" | "sessionId" | "downloadedAt", ExtArgs["result"]["download"]>
  export type DownloadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meme?: boolean | MemeDefaultArgs<ExtArgs>
  }

  export type $DownloadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Download"
    objects: {
      meme: Prisma.$MemePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      memeId: number
      userId: number | null
      sessionId: string | null
      downloadedAt: Date
    }, ExtArgs["result"]["download"]>
    composites: {}
  }

  type DownloadGetPayload<S extends boolean | null | undefined | DownloadDefaultArgs> = $Result.GetResult<Prisma.$DownloadPayload, S>

  type DownloadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DownloadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DownloadCountAggregateInputType | true
    }

  export interface DownloadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Download'], meta: { name: 'Download' } }
    /**
     * Find zero or one Download that matches the filter.
     * @param {DownloadFindUniqueArgs} args - Arguments to find a Download
     * @example
     * // Get one Download
     * const download = await prisma.download.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DownloadFindUniqueArgs>(args: SelectSubset<T, DownloadFindUniqueArgs<ExtArgs>>): Prisma__DownloadClient<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Download that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DownloadFindUniqueOrThrowArgs} args - Arguments to find a Download
     * @example
     * // Get one Download
     * const download = await prisma.download.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DownloadFindUniqueOrThrowArgs>(args: SelectSubset<T, DownloadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DownloadClient<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Download that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadFindFirstArgs} args - Arguments to find a Download
     * @example
     * // Get one Download
     * const download = await prisma.download.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DownloadFindFirstArgs>(args?: SelectSubset<T, DownloadFindFirstArgs<ExtArgs>>): Prisma__DownloadClient<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Download that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadFindFirstOrThrowArgs} args - Arguments to find a Download
     * @example
     * // Get one Download
     * const download = await prisma.download.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DownloadFindFirstOrThrowArgs>(args?: SelectSubset<T, DownloadFindFirstOrThrowArgs<ExtArgs>>): Prisma__DownloadClient<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Downloads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Downloads
     * const downloads = await prisma.download.findMany()
     * 
     * // Get first 10 Downloads
     * const downloads = await prisma.download.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const downloadWithIdOnly = await prisma.download.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DownloadFindManyArgs>(args?: SelectSubset<T, DownloadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Download.
     * @param {DownloadCreateArgs} args - Arguments to create a Download.
     * @example
     * // Create one Download
     * const Download = await prisma.download.create({
     *   data: {
     *     // ... data to create a Download
     *   }
     * })
     * 
     */
    create<T extends DownloadCreateArgs>(args: SelectSubset<T, DownloadCreateArgs<ExtArgs>>): Prisma__DownloadClient<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Downloads.
     * @param {DownloadCreateManyArgs} args - Arguments to create many Downloads.
     * @example
     * // Create many Downloads
     * const download = await prisma.download.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DownloadCreateManyArgs>(args?: SelectSubset<T, DownloadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Download.
     * @param {DownloadDeleteArgs} args - Arguments to delete one Download.
     * @example
     * // Delete one Download
     * const Download = await prisma.download.delete({
     *   where: {
     *     // ... filter to delete one Download
     *   }
     * })
     * 
     */
    delete<T extends DownloadDeleteArgs>(args: SelectSubset<T, DownloadDeleteArgs<ExtArgs>>): Prisma__DownloadClient<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Download.
     * @param {DownloadUpdateArgs} args - Arguments to update one Download.
     * @example
     * // Update one Download
     * const download = await prisma.download.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DownloadUpdateArgs>(args: SelectSubset<T, DownloadUpdateArgs<ExtArgs>>): Prisma__DownloadClient<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Downloads.
     * @param {DownloadDeleteManyArgs} args - Arguments to filter Downloads to delete.
     * @example
     * // Delete a few Downloads
     * const { count } = await prisma.download.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DownloadDeleteManyArgs>(args?: SelectSubset<T, DownloadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Downloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Downloads
     * const download = await prisma.download.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DownloadUpdateManyArgs>(args: SelectSubset<T, DownloadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Download.
     * @param {DownloadUpsertArgs} args - Arguments to update or create a Download.
     * @example
     * // Update or create a Download
     * const download = await prisma.download.upsert({
     *   create: {
     *     // ... data to create a Download
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Download we want to update
     *   }
     * })
     */
    upsert<T extends DownloadUpsertArgs>(args: SelectSubset<T, DownloadUpsertArgs<ExtArgs>>): Prisma__DownloadClient<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Downloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadCountArgs} args - Arguments to filter Downloads to count.
     * @example
     * // Count the number of Downloads
     * const count = await prisma.download.count({
     *   where: {
     *     // ... the filter for the Downloads we want to count
     *   }
     * })
    **/
    count<T extends DownloadCountArgs>(
      args?: Subset<T, DownloadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DownloadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Download.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DownloadAggregateArgs>(args: Subset<T, DownloadAggregateArgs>): Prisma.PrismaPromise<GetDownloadAggregateType<T>>

    /**
     * Group by Download.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadGroupByArgs} args - Group by arguments.
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
      T extends DownloadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DownloadGroupByArgs['orderBy'] }
        : { orderBy?: DownloadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DownloadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDownloadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Download model
   */
  readonly fields: DownloadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Download.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DownloadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meme<T extends MemeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemeDefaultArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Download model
   */
  interface DownloadFieldRefs {
    readonly id: FieldRef<"Download", 'Int'>
    readonly memeId: FieldRef<"Download", 'Int'>
    readonly userId: FieldRef<"Download", 'Int'>
    readonly sessionId: FieldRef<"Download", 'String'>
    readonly downloadedAt: FieldRef<"Download", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Download findUnique
   */
  export type DownloadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DownloadInclude<ExtArgs> | null
    /**
     * Filter, which Download to fetch.
     */
    where: DownloadWhereUniqueInput
  }

  /**
   * Download findUniqueOrThrow
   */
  export type DownloadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DownloadInclude<ExtArgs> | null
    /**
     * Filter, which Download to fetch.
     */
    where: DownloadWhereUniqueInput
  }

  /**
   * Download findFirst
   */
  export type DownloadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DownloadInclude<ExtArgs> | null
    /**
     * Filter, which Download to fetch.
     */
    where?: DownloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Downloads to fetch.
     */
    orderBy?: DownloadOrderByWithRelationInput | DownloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Downloads.
     */
    cursor?: DownloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Downloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Downloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Downloads.
     */
    distinct?: DownloadScalarFieldEnum | DownloadScalarFieldEnum[]
  }

  /**
   * Download findFirstOrThrow
   */
  export type DownloadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DownloadInclude<ExtArgs> | null
    /**
     * Filter, which Download to fetch.
     */
    where?: DownloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Downloads to fetch.
     */
    orderBy?: DownloadOrderByWithRelationInput | DownloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Downloads.
     */
    cursor?: DownloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Downloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Downloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Downloads.
     */
    distinct?: DownloadScalarFieldEnum | DownloadScalarFieldEnum[]
  }

  /**
   * Download findMany
   */
  export type DownloadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DownloadInclude<ExtArgs> | null
    /**
     * Filter, which Downloads to fetch.
     */
    where?: DownloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Downloads to fetch.
     */
    orderBy?: DownloadOrderByWithRelationInput | DownloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Downloads.
     */
    cursor?: DownloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Downloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Downloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Downloads.
     */
    distinct?: DownloadScalarFieldEnum | DownloadScalarFieldEnum[]
  }

  /**
   * Download create
   */
  export type DownloadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DownloadInclude<ExtArgs> | null
    /**
     * The data needed to create a Download.
     */
    data: XOR<DownloadCreateInput, DownloadUncheckedCreateInput>
  }

  /**
   * Download createMany
   */
  export type DownloadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Downloads.
     */
    data: DownloadCreateManyInput | DownloadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Download update
   */
  export type DownloadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DownloadInclude<ExtArgs> | null
    /**
     * The data needed to update a Download.
     */
    data: XOR<DownloadUpdateInput, DownloadUncheckedUpdateInput>
    /**
     * Choose, which Download to update.
     */
    where: DownloadWhereUniqueInput
  }

  /**
   * Download updateMany
   */
  export type DownloadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Downloads.
     */
    data: XOR<DownloadUpdateManyMutationInput, DownloadUncheckedUpdateManyInput>
    /**
     * Filter which Downloads to update
     */
    where?: DownloadWhereInput
    /**
     * Limit how many Downloads to update.
     */
    limit?: number
  }

  /**
   * Download upsert
   */
  export type DownloadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DownloadInclude<ExtArgs> | null
    /**
     * The filter to search for the Download to update in case it exists.
     */
    where: DownloadWhereUniqueInput
    /**
     * In case the Download found by the `where` argument doesn't exist, create a new Download with this data.
     */
    create: XOR<DownloadCreateInput, DownloadUncheckedCreateInput>
    /**
     * In case the Download was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DownloadUpdateInput, DownloadUncheckedUpdateInput>
  }

  /**
   * Download delete
   */
  export type DownloadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DownloadInclude<ExtArgs> | null
    /**
     * Filter which Download to delete.
     */
    where: DownloadWhereUniqueInput
  }

  /**
   * Download deleteMany
   */
  export type DownloadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Downloads to delete
     */
    where?: DownloadWhereInput
    /**
     * Limit how many Downloads to delete.
     */
    limit?: number
  }

  /**
   * Download without action
   */
  export type DownloadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DownloadInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateAvgAggregateOutputType = {
    id: number | null
  }

  export type TemplateSumAggregateOutputType = {
    id: number | null
  }

  export type TemplateMinAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
    category: string | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
    category: string | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    category: number
    _all: number
  }


  export type TemplateAvgAggregateInputType = {
    id?: true
  }

  export type TemplateSumAggregateInputType = {
    id?: true
  }

  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    category?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    category?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    category?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _avg?: TemplateAvgAggregateInputType
    _sum?: TemplateSumAggregateInputType
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: number
    name: string
    imageUrl: string
    category: string
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    category?: boolean
  }, ExtArgs["result"]["template"]>



  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    category?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "imageUrl" | "category", ExtArgs["result"]["template"]>

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      imageUrl: string
      category: string
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'Int'>
    readonly name: FieldRef<"Template", 'String'>
    readonly imageUrl: FieldRef<"Template", 'String'>
    readonly category: FieldRef<"Template", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
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


  export const MemeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    imageUrl: 'imageUrl',
    userId: 'userId',
    sessionId: 'sessionId',
    visibility: 'visibility',
    status: 'status',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemeScalarFieldEnum = (typeof MemeScalarFieldEnum)[keyof typeof MemeScalarFieldEnum]


  export const TextLayerScalarFieldEnum: {
    id: 'id',
    memeId: 'memeId',
    content: 'content',
    xPosition: 'xPosition',
    yPosition: 'yPosition',
    fontSize: 'fontSize',
    fontFamily: 'fontFamily',
    color: 'color',
    strokeColor: 'strokeColor',
    rotation: 'rotation',
    zIndex: 'zIndex',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TextLayerScalarFieldEnum = (typeof TextLayerScalarFieldEnum)[keyof typeof TextLayerScalarFieldEnum]


  export const DownloadScalarFieldEnum: {
    id: 'id',
    memeId: 'memeId',
    userId: 'userId',
    sessionId: 'sessionId',
    downloadedAt: 'downloadedAt'
  };

  export type DownloadScalarFieldEnum = (typeof DownloadScalarFieldEnum)[keyof typeof DownloadScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl',
    category: 'category'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const MemeOrderByRelevanceFieldEnum: {
    title: 'title',
    imageUrl: 'imageUrl',
    sessionId: 'sessionId'
  };

  export type MemeOrderByRelevanceFieldEnum = (typeof MemeOrderByRelevanceFieldEnum)[keyof typeof MemeOrderByRelevanceFieldEnum]


  export const TextLayerOrderByRelevanceFieldEnum: {
    content: 'content',
    fontFamily: 'fontFamily',
    color: 'color',
    strokeColor: 'strokeColor'
  };

  export type TextLayerOrderByRelevanceFieldEnum = (typeof TextLayerOrderByRelevanceFieldEnum)[keyof typeof TextLayerOrderByRelevanceFieldEnum]


  export const DownloadOrderByRelevanceFieldEnum: {
    sessionId: 'sessionId'
  };

  export type DownloadOrderByRelevanceFieldEnum = (typeof DownloadOrderByRelevanceFieldEnum)[keyof typeof DownloadOrderByRelevanceFieldEnum]


  export const TemplateOrderByRelevanceFieldEnum: {
    name: 'name',
    imageUrl: 'imageUrl',
    category: 'category'
  };

  export type TemplateOrderByRelevanceFieldEnum = (typeof TemplateOrderByRelevanceFieldEnum)[keyof typeof TemplateOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'MemeVisibility'
   */
  export type EnumMemeVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemeVisibility'>
    


  /**
   * Reference to a field of type 'MemeStatus'
   */
  export type EnumMemeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemeStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type MemeWhereInput = {
    AND?: MemeWhereInput | MemeWhereInput[]
    OR?: MemeWhereInput[]
    NOT?: MemeWhereInput | MemeWhereInput[]
    id?: IntFilter<"Meme"> | number
    title?: StringFilter<"Meme"> | string
    imageUrl?: StringFilter<"Meme"> | string
    userId?: IntNullableFilter<"Meme"> | number | null
    sessionId?: StringNullableFilter<"Meme"> | string | null
    visibility?: EnumMemeVisibilityFilter<"Meme"> | $Enums.MemeVisibility
    status?: EnumMemeStatusFilter<"Meme"> | $Enums.MemeStatus
    expiresAt?: DateTimeNullableFilter<"Meme"> | Date | string | null
    createdAt?: DateTimeFilter<"Meme"> | Date | string
    updatedAt?: DateTimeFilter<"Meme"> | Date | string
    textLayers?: TextLayerListRelationFilter
    downloads?: DownloadListRelationFilter
  }

  export type MemeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    visibility?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    textLayers?: TextLayerOrderByRelationAggregateInput
    downloads?: DownloadOrderByRelationAggregateInput
    _relevance?: MemeOrderByRelevanceInput
  }

  export type MemeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: MemeWhereInput | MemeWhereInput[]
    OR?: MemeWhereInput[]
    NOT?: MemeWhereInput | MemeWhereInput[]
    imageUrl?: StringFilter<"Meme"> | string
    userId?: IntNullableFilter<"Meme"> | number | null
    sessionId?: StringNullableFilter<"Meme"> | string | null
    visibility?: EnumMemeVisibilityFilter<"Meme"> | $Enums.MemeVisibility
    status?: EnumMemeStatusFilter<"Meme"> | $Enums.MemeStatus
    expiresAt?: DateTimeNullableFilter<"Meme"> | Date | string | null
    createdAt?: DateTimeFilter<"Meme"> | Date | string
    updatedAt?: DateTimeFilter<"Meme"> | Date | string
    textLayers?: TextLayerListRelationFilter
    downloads?: DownloadListRelationFilter
  }, "id" | "title">

  export type MemeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    visibility?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemeCountOrderByAggregateInput
    _avg?: MemeAvgOrderByAggregateInput
    _max?: MemeMaxOrderByAggregateInput
    _min?: MemeMinOrderByAggregateInput
    _sum?: MemeSumOrderByAggregateInput
  }

  export type MemeScalarWhereWithAggregatesInput = {
    AND?: MemeScalarWhereWithAggregatesInput | MemeScalarWhereWithAggregatesInput[]
    OR?: MemeScalarWhereWithAggregatesInput[]
    NOT?: MemeScalarWhereWithAggregatesInput | MemeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meme"> | number
    title?: StringWithAggregatesFilter<"Meme"> | string
    imageUrl?: StringWithAggregatesFilter<"Meme"> | string
    userId?: IntNullableWithAggregatesFilter<"Meme"> | number | null
    sessionId?: StringNullableWithAggregatesFilter<"Meme"> | string | null
    visibility?: EnumMemeVisibilityWithAggregatesFilter<"Meme"> | $Enums.MemeVisibility
    status?: EnumMemeStatusWithAggregatesFilter<"Meme"> | $Enums.MemeStatus
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Meme"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Meme"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meme"> | Date | string
  }

  export type TextLayerWhereInput = {
    AND?: TextLayerWhereInput | TextLayerWhereInput[]
    OR?: TextLayerWhereInput[]
    NOT?: TextLayerWhereInput | TextLayerWhereInput[]
    id?: IntFilter<"TextLayer"> | number
    memeId?: IntFilter<"TextLayer"> | number
    content?: StringFilter<"TextLayer"> | string
    xPosition?: FloatFilter<"TextLayer"> | number
    yPosition?: FloatFilter<"TextLayer"> | number
    fontSize?: IntFilter<"TextLayer"> | number
    fontFamily?: StringFilter<"TextLayer"> | string
    color?: StringFilter<"TextLayer"> | string
    strokeColor?: StringFilter<"TextLayer"> | string
    rotation?: FloatFilter<"TextLayer"> | number
    zIndex?: IntFilter<"TextLayer"> | number
    createdAt?: DateTimeFilter<"TextLayer"> | Date | string
    updatedAt?: DateTimeFilter<"TextLayer"> | Date | string
    meme?: XOR<MemeScalarRelationFilter, MemeWhereInput>
  }

  export type TextLayerOrderByWithRelationInput = {
    id?: SortOrder
    memeId?: SortOrder
    content?: SortOrder
    xPosition?: SortOrder
    yPosition?: SortOrder
    fontSize?: SortOrder
    fontFamily?: SortOrder
    color?: SortOrder
    strokeColor?: SortOrder
    rotation?: SortOrder
    zIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meme?: MemeOrderByWithRelationInput
    _relevance?: TextLayerOrderByRelevanceInput
  }

  export type TextLayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TextLayerWhereInput | TextLayerWhereInput[]
    OR?: TextLayerWhereInput[]
    NOT?: TextLayerWhereInput | TextLayerWhereInput[]
    memeId?: IntFilter<"TextLayer"> | number
    content?: StringFilter<"TextLayer"> | string
    xPosition?: FloatFilter<"TextLayer"> | number
    yPosition?: FloatFilter<"TextLayer"> | number
    fontSize?: IntFilter<"TextLayer"> | number
    fontFamily?: StringFilter<"TextLayer"> | string
    color?: StringFilter<"TextLayer"> | string
    strokeColor?: StringFilter<"TextLayer"> | string
    rotation?: FloatFilter<"TextLayer"> | number
    zIndex?: IntFilter<"TextLayer"> | number
    createdAt?: DateTimeFilter<"TextLayer"> | Date | string
    updatedAt?: DateTimeFilter<"TextLayer"> | Date | string
    meme?: XOR<MemeScalarRelationFilter, MemeWhereInput>
  }, "id">

  export type TextLayerOrderByWithAggregationInput = {
    id?: SortOrder
    memeId?: SortOrder
    content?: SortOrder
    xPosition?: SortOrder
    yPosition?: SortOrder
    fontSize?: SortOrder
    fontFamily?: SortOrder
    color?: SortOrder
    strokeColor?: SortOrder
    rotation?: SortOrder
    zIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TextLayerCountOrderByAggregateInput
    _avg?: TextLayerAvgOrderByAggregateInput
    _max?: TextLayerMaxOrderByAggregateInput
    _min?: TextLayerMinOrderByAggregateInput
    _sum?: TextLayerSumOrderByAggregateInput
  }

  export type TextLayerScalarWhereWithAggregatesInput = {
    AND?: TextLayerScalarWhereWithAggregatesInput | TextLayerScalarWhereWithAggregatesInput[]
    OR?: TextLayerScalarWhereWithAggregatesInput[]
    NOT?: TextLayerScalarWhereWithAggregatesInput | TextLayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TextLayer"> | number
    memeId?: IntWithAggregatesFilter<"TextLayer"> | number
    content?: StringWithAggregatesFilter<"TextLayer"> | string
    xPosition?: FloatWithAggregatesFilter<"TextLayer"> | number
    yPosition?: FloatWithAggregatesFilter<"TextLayer"> | number
    fontSize?: IntWithAggregatesFilter<"TextLayer"> | number
    fontFamily?: StringWithAggregatesFilter<"TextLayer"> | string
    color?: StringWithAggregatesFilter<"TextLayer"> | string
    strokeColor?: StringWithAggregatesFilter<"TextLayer"> | string
    rotation?: FloatWithAggregatesFilter<"TextLayer"> | number
    zIndex?: IntWithAggregatesFilter<"TextLayer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TextLayer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TextLayer"> | Date | string
  }

  export type DownloadWhereInput = {
    AND?: DownloadWhereInput | DownloadWhereInput[]
    OR?: DownloadWhereInput[]
    NOT?: DownloadWhereInput | DownloadWhereInput[]
    id?: IntFilter<"Download"> | number
    memeId?: IntFilter<"Download"> | number
    userId?: IntNullableFilter<"Download"> | number | null
    sessionId?: StringNullableFilter<"Download"> | string | null
    downloadedAt?: DateTimeFilter<"Download"> | Date | string
    meme?: XOR<MemeScalarRelationFilter, MemeWhereInput>
  }

  export type DownloadOrderByWithRelationInput = {
    id?: SortOrder
    memeId?: SortOrder
    userId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    downloadedAt?: SortOrder
    meme?: MemeOrderByWithRelationInput
    _relevance?: DownloadOrderByRelevanceInput
  }

  export type DownloadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DownloadWhereInput | DownloadWhereInput[]
    OR?: DownloadWhereInput[]
    NOT?: DownloadWhereInput | DownloadWhereInput[]
    memeId?: IntFilter<"Download"> | number
    userId?: IntNullableFilter<"Download"> | number | null
    sessionId?: StringNullableFilter<"Download"> | string | null
    downloadedAt?: DateTimeFilter<"Download"> | Date | string
    meme?: XOR<MemeScalarRelationFilter, MemeWhereInput>
  }, "id">

  export type DownloadOrderByWithAggregationInput = {
    id?: SortOrder
    memeId?: SortOrder
    userId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    downloadedAt?: SortOrder
    _count?: DownloadCountOrderByAggregateInput
    _avg?: DownloadAvgOrderByAggregateInput
    _max?: DownloadMaxOrderByAggregateInput
    _min?: DownloadMinOrderByAggregateInput
    _sum?: DownloadSumOrderByAggregateInput
  }

  export type DownloadScalarWhereWithAggregatesInput = {
    AND?: DownloadScalarWhereWithAggregatesInput | DownloadScalarWhereWithAggregatesInput[]
    OR?: DownloadScalarWhereWithAggregatesInput[]
    NOT?: DownloadScalarWhereWithAggregatesInput | DownloadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Download"> | number
    memeId?: IntWithAggregatesFilter<"Download"> | number
    userId?: IntNullableWithAggregatesFilter<"Download"> | number | null
    sessionId?: StringNullableWithAggregatesFilter<"Download"> | string | null
    downloadedAt?: DateTimeWithAggregatesFilter<"Download"> | Date | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: IntFilter<"Template"> | number
    name?: StringFilter<"Template"> | string
    imageUrl?: StringFilter<"Template"> | string
    category?: StringFilter<"Template"> | string
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
    _relevance?: TemplateOrderByRelevanceInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    name?: StringFilter<"Template"> | string
    imageUrl?: StringFilter<"Template"> | string
    category?: StringFilter<"Template"> | string
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _avg?: TemplateAvgOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
    _sum?: TemplateSumOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Template"> | number
    name?: StringWithAggregatesFilter<"Template"> | string
    imageUrl?: StringWithAggregatesFilter<"Template"> | string
    category?: StringWithAggregatesFilter<"Template"> | string
  }

  export type MemeCreateInput = {
    title: string
    imageUrl: string
    userId?: number | null
    sessionId?: string | null
    visibility?: $Enums.MemeVisibility
    status?: $Enums.MemeStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    textLayers?: TextLayerCreateNestedManyWithoutMemeInput
    downloads?: DownloadCreateNestedManyWithoutMemeInput
  }

  export type MemeUncheckedCreateInput = {
    id?: number
    title: string
    imageUrl: string
    userId?: number | null
    sessionId?: string | null
    visibility?: $Enums.MemeVisibility
    status?: $Enums.MemeStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    textLayers?: TextLayerUncheckedCreateNestedManyWithoutMemeInput
    downloads?: DownloadUncheckedCreateNestedManyWithoutMemeInput
  }

  export type MemeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumMemeVisibilityFieldUpdateOperationsInput | $Enums.MemeVisibility
    status?: EnumMemeStatusFieldUpdateOperationsInput | $Enums.MemeStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    textLayers?: TextLayerUpdateManyWithoutMemeNestedInput
    downloads?: DownloadUpdateManyWithoutMemeNestedInput
  }

  export type MemeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumMemeVisibilityFieldUpdateOperationsInput | $Enums.MemeVisibility
    status?: EnumMemeStatusFieldUpdateOperationsInput | $Enums.MemeStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    textLayers?: TextLayerUncheckedUpdateManyWithoutMemeNestedInput
    downloads?: DownloadUncheckedUpdateManyWithoutMemeNestedInput
  }

  export type MemeCreateManyInput = {
    id?: number
    title: string
    imageUrl: string
    userId?: number | null
    sessionId?: string | null
    visibility?: $Enums.MemeVisibility
    status?: $Enums.MemeStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumMemeVisibilityFieldUpdateOperationsInput | $Enums.MemeVisibility
    status?: EnumMemeStatusFieldUpdateOperationsInput | $Enums.MemeStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumMemeVisibilityFieldUpdateOperationsInput | $Enums.MemeVisibility
    status?: EnumMemeStatusFieldUpdateOperationsInput | $Enums.MemeStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TextLayerCreateInput = {
    content: string
    xPosition: number
    yPosition: number
    fontSize?: number
    fontFamily?: string
    color?: string
    strokeColor?: string
    rotation?: number
    zIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meme: MemeCreateNestedOneWithoutTextLayersInput
  }

  export type TextLayerUncheckedCreateInput = {
    id?: number
    memeId: number
    content: string
    xPosition: number
    yPosition: number
    fontSize?: number
    fontFamily?: string
    color?: string
    strokeColor?: string
    rotation?: number
    zIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TextLayerUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    xPosition?: FloatFieldUpdateOperationsInput | number
    yPosition?: FloatFieldUpdateOperationsInput | number
    fontSize?: IntFieldUpdateOperationsInput | number
    fontFamily?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    strokeColor?: StringFieldUpdateOperationsInput | string
    rotation?: FloatFieldUpdateOperationsInput | number
    zIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meme?: MemeUpdateOneRequiredWithoutTextLayersNestedInput
  }

  export type TextLayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    memeId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    xPosition?: FloatFieldUpdateOperationsInput | number
    yPosition?: FloatFieldUpdateOperationsInput | number
    fontSize?: IntFieldUpdateOperationsInput | number
    fontFamily?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    strokeColor?: StringFieldUpdateOperationsInput | string
    rotation?: FloatFieldUpdateOperationsInput | number
    zIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TextLayerCreateManyInput = {
    id?: number
    memeId: number
    content: string
    xPosition: number
    yPosition: number
    fontSize?: number
    fontFamily?: string
    color?: string
    strokeColor?: string
    rotation?: number
    zIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TextLayerUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    xPosition?: FloatFieldUpdateOperationsInput | number
    yPosition?: FloatFieldUpdateOperationsInput | number
    fontSize?: IntFieldUpdateOperationsInput | number
    fontFamily?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    strokeColor?: StringFieldUpdateOperationsInput | string
    rotation?: FloatFieldUpdateOperationsInput | number
    zIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TextLayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    memeId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    xPosition?: FloatFieldUpdateOperationsInput | number
    yPosition?: FloatFieldUpdateOperationsInput | number
    fontSize?: IntFieldUpdateOperationsInput | number
    fontFamily?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    strokeColor?: StringFieldUpdateOperationsInput | string
    rotation?: FloatFieldUpdateOperationsInput | number
    zIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DownloadCreateInput = {
    userId?: number | null
    sessionId?: string | null
    downloadedAt?: Date | string
    meme: MemeCreateNestedOneWithoutDownloadsInput
  }

  export type DownloadUncheckedCreateInput = {
    id?: number
    memeId: number
    userId?: number | null
    sessionId?: string | null
    downloadedAt?: Date | string
  }

  export type DownloadUpdateInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    downloadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meme?: MemeUpdateOneRequiredWithoutDownloadsNestedInput
  }

  export type DownloadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    memeId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    downloadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DownloadCreateManyInput = {
    id?: number
    memeId: number
    userId?: number | null
    sessionId?: string | null
    downloadedAt?: Date | string
  }

  export type DownloadUpdateManyMutationInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    downloadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DownloadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    memeId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    downloadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateInput = {
    name: string
    imageUrl: string
    category: string
  }

  export type TemplateUncheckedCreateInput = {
    id?: number
    name: string
    imageUrl: string
    category: string
  }

  export type TemplateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateCreateManyInput = {
    id?: number
    name: string
    imageUrl: string
    category: string
  }

  export type TemplateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumMemeVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.MemeVisibility | EnumMemeVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.MemeVisibility[]
    notIn?: $Enums.MemeVisibility[]
    not?: NestedEnumMemeVisibilityFilter<$PrismaModel> | $Enums.MemeVisibility
  }

  export type EnumMemeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemeStatus | EnumMemeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemeStatus[]
    notIn?: $Enums.MemeStatus[]
    not?: NestedEnumMemeStatusFilter<$PrismaModel> | $Enums.MemeStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TextLayerListRelationFilter = {
    every?: TextLayerWhereInput
    some?: TextLayerWhereInput
    none?: TextLayerWhereInput
  }

  export type DownloadListRelationFilter = {
    every?: DownloadWhereInput
    some?: DownloadWhereInput
    none?: DownloadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TextLayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DownloadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemeOrderByRelevanceInput = {
    fields: MemeOrderByRelevanceFieldEnum | MemeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MemeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    visibility?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MemeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    visibility?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    visibility?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumMemeVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemeVisibility | EnumMemeVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.MemeVisibility[]
    notIn?: $Enums.MemeVisibility[]
    not?: NestedEnumMemeVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.MemeVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemeVisibilityFilter<$PrismaModel>
    _max?: NestedEnumMemeVisibilityFilter<$PrismaModel>
  }

  export type EnumMemeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemeStatus | EnumMemeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemeStatus[]
    notIn?: $Enums.MemeStatus[]
    not?: NestedEnumMemeStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemeStatusFilter<$PrismaModel>
    _max?: NestedEnumMemeStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MemeScalarRelationFilter = {
    is?: MemeWhereInput
    isNot?: MemeWhereInput
  }

  export type TextLayerOrderByRelevanceInput = {
    fields: TextLayerOrderByRelevanceFieldEnum | TextLayerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TextLayerCountOrderByAggregateInput = {
    id?: SortOrder
    memeId?: SortOrder
    content?: SortOrder
    xPosition?: SortOrder
    yPosition?: SortOrder
    fontSize?: SortOrder
    fontFamily?: SortOrder
    color?: SortOrder
    strokeColor?: SortOrder
    rotation?: SortOrder
    zIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TextLayerAvgOrderByAggregateInput = {
    id?: SortOrder
    memeId?: SortOrder
    xPosition?: SortOrder
    yPosition?: SortOrder
    fontSize?: SortOrder
    rotation?: SortOrder
    zIndex?: SortOrder
  }

  export type TextLayerMaxOrderByAggregateInput = {
    id?: SortOrder
    memeId?: SortOrder
    content?: SortOrder
    xPosition?: SortOrder
    yPosition?: SortOrder
    fontSize?: SortOrder
    fontFamily?: SortOrder
    color?: SortOrder
    strokeColor?: SortOrder
    rotation?: SortOrder
    zIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TextLayerMinOrderByAggregateInput = {
    id?: SortOrder
    memeId?: SortOrder
    content?: SortOrder
    xPosition?: SortOrder
    yPosition?: SortOrder
    fontSize?: SortOrder
    fontFamily?: SortOrder
    color?: SortOrder
    strokeColor?: SortOrder
    rotation?: SortOrder
    zIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TextLayerSumOrderByAggregateInput = {
    id?: SortOrder
    memeId?: SortOrder
    xPosition?: SortOrder
    yPosition?: SortOrder
    fontSize?: SortOrder
    rotation?: SortOrder
    zIndex?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DownloadOrderByRelevanceInput = {
    fields: DownloadOrderByRelevanceFieldEnum | DownloadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DownloadCountOrderByAggregateInput = {
    id?: SortOrder
    memeId?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    downloadedAt?: SortOrder
  }

  export type DownloadAvgOrderByAggregateInput = {
    id?: SortOrder
    memeId?: SortOrder
    userId?: SortOrder
  }

  export type DownloadMaxOrderByAggregateInput = {
    id?: SortOrder
    memeId?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    downloadedAt?: SortOrder
  }

  export type DownloadMinOrderByAggregateInput = {
    id?: SortOrder
    memeId?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    downloadedAt?: SortOrder
  }

  export type DownloadSumOrderByAggregateInput = {
    id?: SortOrder
    memeId?: SortOrder
    userId?: SortOrder
  }

  export type TemplateOrderByRelevanceInput = {
    fields: TemplateOrderByRelevanceFieldEnum | TemplateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
  }

  export type TemplateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
  }

  export type TemplateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TextLayerCreateNestedManyWithoutMemeInput = {
    create?: XOR<TextLayerCreateWithoutMemeInput, TextLayerUncheckedCreateWithoutMemeInput> | TextLayerCreateWithoutMemeInput[] | TextLayerUncheckedCreateWithoutMemeInput[]
    connectOrCreate?: TextLayerCreateOrConnectWithoutMemeInput | TextLayerCreateOrConnectWithoutMemeInput[]
    createMany?: TextLayerCreateManyMemeInputEnvelope
    connect?: TextLayerWhereUniqueInput | TextLayerWhereUniqueInput[]
  }

  export type DownloadCreateNestedManyWithoutMemeInput = {
    create?: XOR<DownloadCreateWithoutMemeInput, DownloadUncheckedCreateWithoutMemeInput> | DownloadCreateWithoutMemeInput[] | DownloadUncheckedCreateWithoutMemeInput[]
    connectOrCreate?: DownloadCreateOrConnectWithoutMemeInput | DownloadCreateOrConnectWithoutMemeInput[]
    createMany?: DownloadCreateManyMemeInputEnvelope
    connect?: DownloadWhereUniqueInput | DownloadWhereUniqueInput[]
  }

  export type TextLayerUncheckedCreateNestedManyWithoutMemeInput = {
    create?: XOR<TextLayerCreateWithoutMemeInput, TextLayerUncheckedCreateWithoutMemeInput> | TextLayerCreateWithoutMemeInput[] | TextLayerUncheckedCreateWithoutMemeInput[]
    connectOrCreate?: TextLayerCreateOrConnectWithoutMemeInput | TextLayerCreateOrConnectWithoutMemeInput[]
    createMany?: TextLayerCreateManyMemeInputEnvelope
    connect?: TextLayerWhereUniqueInput | TextLayerWhereUniqueInput[]
  }

  export type DownloadUncheckedCreateNestedManyWithoutMemeInput = {
    create?: XOR<DownloadCreateWithoutMemeInput, DownloadUncheckedCreateWithoutMemeInput> | DownloadCreateWithoutMemeInput[] | DownloadUncheckedCreateWithoutMemeInput[]
    connectOrCreate?: DownloadCreateOrConnectWithoutMemeInput | DownloadCreateOrConnectWithoutMemeInput[]
    createMany?: DownloadCreateManyMemeInputEnvelope
    connect?: DownloadWhereUniqueInput | DownloadWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumMemeVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.MemeVisibility
  }

  export type EnumMemeStatusFieldUpdateOperationsInput = {
    set?: $Enums.MemeStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TextLayerUpdateManyWithoutMemeNestedInput = {
    create?: XOR<TextLayerCreateWithoutMemeInput, TextLayerUncheckedCreateWithoutMemeInput> | TextLayerCreateWithoutMemeInput[] | TextLayerUncheckedCreateWithoutMemeInput[]
    connectOrCreate?: TextLayerCreateOrConnectWithoutMemeInput | TextLayerCreateOrConnectWithoutMemeInput[]
    upsert?: TextLayerUpsertWithWhereUniqueWithoutMemeInput | TextLayerUpsertWithWhereUniqueWithoutMemeInput[]
    createMany?: TextLayerCreateManyMemeInputEnvelope
    set?: TextLayerWhereUniqueInput | TextLayerWhereUniqueInput[]
    disconnect?: TextLayerWhereUniqueInput | TextLayerWhereUniqueInput[]
    delete?: TextLayerWhereUniqueInput | TextLayerWhereUniqueInput[]
    connect?: TextLayerWhereUniqueInput | TextLayerWhereUniqueInput[]
    update?: TextLayerUpdateWithWhereUniqueWithoutMemeInput | TextLayerUpdateWithWhereUniqueWithoutMemeInput[]
    updateMany?: TextLayerUpdateManyWithWhereWithoutMemeInput | TextLayerUpdateManyWithWhereWithoutMemeInput[]
    deleteMany?: TextLayerScalarWhereInput | TextLayerScalarWhereInput[]
  }

  export type DownloadUpdateManyWithoutMemeNestedInput = {
    create?: XOR<DownloadCreateWithoutMemeInput, DownloadUncheckedCreateWithoutMemeInput> | DownloadCreateWithoutMemeInput[] | DownloadUncheckedCreateWithoutMemeInput[]
    connectOrCreate?: DownloadCreateOrConnectWithoutMemeInput | DownloadCreateOrConnectWithoutMemeInput[]
    upsert?: DownloadUpsertWithWhereUniqueWithoutMemeInput | DownloadUpsertWithWhereUniqueWithoutMemeInput[]
    createMany?: DownloadCreateManyMemeInputEnvelope
    set?: DownloadWhereUniqueInput | DownloadWhereUniqueInput[]
    disconnect?: DownloadWhereUniqueInput | DownloadWhereUniqueInput[]
    delete?: DownloadWhereUniqueInput | DownloadWhereUniqueInput[]
    connect?: DownloadWhereUniqueInput | DownloadWhereUniqueInput[]
    update?: DownloadUpdateWithWhereUniqueWithoutMemeInput | DownloadUpdateWithWhereUniqueWithoutMemeInput[]
    updateMany?: DownloadUpdateManyWithWhereWithoutMemeInput | DownloadUpdateManyWithWhereWithoutMemeInput[]
    deleteMany?: DownloadScalarWhereInput | DownloadScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TextLayerUncheckedUpdateManyWithoutMemeNestedInput = {
    create?: XOR<TextLayerCreateWithoutMemeInput, TextLayerUncheckedCreateWithoutMemeInput> | TextLayerCreateWithoutMemeInput[] | TextLayerUncheckedCreateWithoutMemeInput[]
    connectOrCreate?: TextLayerCreateOrConnectWithoutMemeInput | TextLayerCreateOrConnectWithoutMemeInput[]
    upsert?: TextLayerUpsertWithWhereUniqueWithoutMemeInput | TextLayerUpsertWithWhereUniqueWithoutMemeInput[]
    createMany?: TextLayerCreateManyMemeInputEnvelope
    set?: TextLayerWhereUniqueInput | TextLayerWhereUniqueInput[]
    disconnect?: TextLayerWhereUniqueInput | TextLayerWhereUniqueInput[]
    delete?: TextLayerWhereUniqueInput | TextLayerWhereUniqueInput[]
    connect?: TextLayerWhereUniqueInput | TextLayerWhereUniqueInput[]
    update?: TextLayerUpdateWithWhereUniqueWithoutMemeInput | TextLayerUpdateWithWhereUniqueWithoutMemeInput[]
    updateMany?: TextLayerUpdateManyWithWhereWithoutMemeInput | TextLayerUpdateManyWithWhereWithoutMemeInput[]
    deleteMany?: TextLayerScalarWhereInput | TextLayerScalarWhereInput[]
  }

  export type DownloadUncheckedUpdateManyWithoutMemeNestedInput = {
    create?: XOR<DownloadCreateWithoutMemeInput, DownloadUncheckedCreateWithoutMemeInput> | DownloadCreateWithoutMemeInput[] | DownloadUncheckedCreateWithoutMemeInput[]
    connectOrCreate?: DownloadCreateOrConnectWithoutMemeInput | DownloadCreateOrConnectWithoutMemeInput[]
    upsert?: DownloadUpsertWithWhereUniqueWithoutMemeInput | DownloadUpsertWithWhereUniqueWithoutMemeInput[]
    createMany?: DownloadCreateManyMemeInputEnvelope
    set?: DownloadWhereUniqueInput | DownloadWhereUniqueInput[]
    disconnect?: DownloadWhereUniqueInput | DownloadWhereUniqueInput[]
    delete?: DownloadWhereUniqueInput | DownloadWhereUniqueInput[]
    connect?: DownloadWhereUniqueInput | DownloadWhereUniqueInput[]
    update?: DownloadUpdateWithWhereUniqueWithoutMemeInput | DownloadUpdateWithWhereUniqueWithoutMemeInput[]
    updateMany?: DownloadUpdateManyWithWhereWithoutMemeInput | DownloadUpdateManyWithWhereWithoutMemeInput[]
    deleteMany?: DownloadScalarWhereInput | DownloadScalarWhereInput[]
  }

  export type MemeCreateNestedOneWithoutTextLayersInput = {
    create?: XOR<MemeCreateWithoutTextLayersInput, MemeUncheckedCreateWithoutTextLayersInput>
    connectOrCreate?: MemeCreateOrConnectWithoutTextLayersInput
    connect?: MemeWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MemeUpdateOneRequiredWithoutTextLayersNestedInput = {
    create?: XOR<MemeCreateWithoutTextLayersInput, MemeUncheckedCreateWithoutTextLayersInput>
    connectOrCreate?: MemeCreateOrConnectWithoutTextLayersInput
    upsert?: MemeUpsertWithoutTextLayersInput
    connect?: MemeWhereUniqueInput
    update?: XOR<XOR<MemeUpdateToOneWithWhereWithoutTextLayersInput, MemeUpdateWithoutTextLayersInput>, MemeUncheckedUpdateWithoutTextLayersInput>
  }

  export type MemeCreateNestedOneWithoutDownloadsInput = {
    create?: XOR<MemeCreateWithoutDownloadsInput, MemeUncheckedCreateWithoutDownloadsInput>
    connectOrCreate?: MemeCreateOrConnectWithoutDownloadsInput
    connect?: MemeWhereUniqueInput
  }

  export type MemeUpdateOneRequiredWithoutDownloadsNestedInput = {
    create?: XOR<MemeCreateWithoutDownloadsInput, MemeUncheckedCreateWithoutDownloadsInput>
    connectOrCreate?: MemeCreateOrConnectWithoutDownloadsInput
    upsert?: MemeUpsertWithoutDownloadsInput
    connect?: MemeWhereUniqueInput
    update?: XOR<XOR<MemeUpdateToOneWithWhereWithoutDownloadsInput, MemeUpdateWithoutDownloadsInput>, MemeUncheckedUpdateWithoutDownloadsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumMemeVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.MemeVisibility | EnumMemeVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.MemeVisibility[]
    notIn?: $Enums.MemeVisibility[]
    not?: NestedEnumMemeVisibilityFilter<$PrismaModel> | $Enums.MemeVisibility
  }

  export type NestedEnumMemeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemeStatus | EnumMemeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemeStatus[]
    notIn?: $Enums.MemeStatus[]
    not?: NestedEnumMemeStatusFilter<$PrismaModel> | $Enums.MemeStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumMemeVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemeVisibility | EnumMemeVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.MemeVisibility[]
    notIn?: $Enums.MemeVisibility[]
    not?: NestedEnumMemeVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.MemeVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemeVisibilityFilter<$PrismaModel>
    _max?: NestedEnumMemeVisibilityFilter<$PrismaModel>
  }

  export type NestedEnumMemeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemeStatus | EnumMemeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemeStatus[]
    notIn?: $Enums.MemeStatus[]
    not?: NestedEnumMemeStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemeStatusFilter<$PrismaModel>
    _max?: NestedEnumMemeStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TextLayerCreateWithoutMemeInput = {
    content: string
    xPosition: number
    yPosition: number
    fontSize?: number
    fontFamily?: string
    color?: string
    strokeColor?: string
    rotation?: number
    zIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TextLayerUncheckedCreateWithoutMemeInput = {
    id?: number
    content: string
    xPosition: number
    yPosition: number
    fontSize?: number
    fontFamily?: string
    color?: string
    strokeColor?: string
    rotation?: number
    zIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TextLayerCreateOrConnectWithoutMemeInput = {
    where: TextLayerWhereUniqueInput
    create: XOR<TextLayerCreateWithoutMemeInput, TextLayerUncheckedCreateWithoutMemeInput>
  }

  export type TextLayerCreateManyMemeInputEnvelope = {
    data: TextLayerCreateManyMemeInput | TextLayerCreateManyMemeInput[]
    skipDuplicates?: boolean
  }

  export type DownloadCreateWithoutMemeInput = {
    userId?: number | null
    sessionId?: string | null
    downloadedAt?: Date | string
  }

  export type DownloadUncheckedCreateWithoutMemeInput = {
    id?: number
    userId?: number | null
    sessionId?: string | null
    downloadedAt?: Date | string
  }

  export type DownloadCreateOrConnectWithoutMemeInput = {
    where: DownloadWhereUniqueInput
    create: XOR<DownloadCreateWithoutMemeInput, DownloadUncheckedCreateWithoutMemeInput>
  }

  export type DownloadCreateManyMemeInputEnvelope = {
    data: DownloadCreateManyMemeInput | DownloadCreateManyMemeInput[]
    skipDuplicates?: boolean
  }

  export type TextLayerUpsertWithWhereUniqueWithoutMemeInput = {
    where: TextLayerWhereUniqueInput
    update: XOR<TextLayerUpdateWithoutMemeInput, TextLayerUncheckedUpdateWithoutMemeInput>
    create: XOR<TextLayerCreateWithoutMemeInput, TextLayerUncheckedCreateWithoutMemeInput>
  }

  export type TextLayerUpdateWithWhereUniqueWithoutMemeInput = {
    where: TextLayerWhereUniqueInput
    data: XOR<TextLayerUpdateWithoutMemeInput, TextLayerUncheckedUpdateWithoutMemeInput>
  }

  export type TextLayerUpdateManyWithWhereWithoutMemeInput = {
    where: TextLayerScalarWhereInput
    data: XOR<TextLayerUpdateManyMutationInput, TextLayerUncheckedUpdateManyWithoutMemeInput>
  }

  export type TextLayerScalarWhereInput = {
    AND?: TextLayerScalarWhereInput | TextLayerScalarWhereInput[]
    OR?: TextLayerScalarWhereInput[]
    NOT?: TextLayerScalarWhereInput | TextLayerScalarWhereInput[]
    id?: IntFilter<"TextLayer"> | number
    memeId?: IntFilter<"TextLayer"> | number
    content?: StringFilter<"TextLayer"> | string
    xPosition?: FloatFilter<"TextLayer"> | number
    yPosition?: FloatFilter<"TextLayer"> | number
    fontSize?: IntFilter<"TextLayer"> | number
    fontFamily?: StringFilter<"TextLayer"> | string
    color?: StringFilter<"TextLayer"> | string
    strokeColor?: StringFilter<"TextLayer"> | string
    rotation?: FloatFilter<"TextLayer"> | number
    zIndex?: IntFilter<"TextLayer"> | number
    createdAt?: DateTimeFilter<"TextLayer"> | Date | string
    updatedAt?: DateTimeFilter<"TextLayer"> | Date | string
  }

  export type DownloadUpsertWithWhereUniqueWithoutMemeInput = {
    where: DownloadWhereUniqueInput
    update: XOR<DownloadUpdateWithoutMemeInput, DownloadUncheckedUpdateWithoutMemeInput>
    create: XOR<DownloadCreateWithoutMemeInput, DownloadUncheckedCreateWithoutMemeInput>
  }

  export type DownloadUpdateWithWhereUniqueWithoutMemeInput = {
    where: DownloadWhereUniqueInput
    data: XOR<DownloadUpdateWithoutMemeInput, DownloadUncheckedUpdateWithoutMemeInput>
  }

  export type DownloadUpdateManyWithWhereWithoutMemeInput = {
    where: DownloadScalarWhereInput
    data: XOR<DownloadUpdateManyMutationInput, DownloadUncheckedUpdateManyWithoutMemeInput>
  }

  export type DownloadScalarWhereInput = {
    AND?: DownloadScalarWhereInput | DownloadScalarWhereInput[]
    OR?: DownloadScalarWhereInput[]
    NOT?: DownloadScalarWhereInput | DownloadScalarWhereInput[]
    id?: IntFilter<"Download"> | number
    memeId?: IntFilter<"Download"> | number
    userId?: IntNullableFilter<"Download"> | number | null
    sessionId?: StringNullableFilter<"Download"> | string | null
    downloadedAt?: DateTimeFilter<"Download"> | Date | string
  }

  export type MemeCreateWithoutTextLayersInput = {
    title: string
    imageUrl: string
    userId?: number | null
    sessionId?: string | null
    visibility?: $Enums.MemeVisibility
    status?: $Enums.MemeStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    downloads?: DownloadCreateNestedManyWithoutMemeInput
  }

  export type MemeUncheckedCreateWithoutTextLayersInput = {
    id?: number
    title: string
    imageUrl: string
    userId?: number | null
    sessionId?: string | null
    visibility?: $Enums.MemeVisibility
    status?: $Enums.MemeStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    downloads?: DownloadUncheckedCreateNestedManyWithoutMemeInput
  }

  export type MemeCreateOrConnectWithoutTextLayersInput = {
    where: MemeWhereUniqueInput
    create: XOR<MemeCreateWithoutTextLayersInput, MemeUncheckedCreateWithoutTextLayersInput>
  }

  export type MemeUpsertWithoutTextLayersInput = {
    update: XOR<MemeUpdateWithoutTextLayersInput, MemeUncheckedUpdateWithoutTextLayersInput>
    create: XOR<MemeCreateWithoutTextLayersInput, MemeUncheckedCreateWithoutTextLayersInput>
    where?: MemeWhereInput
  }

  export type MemeUpdateToOneWithWhereWithoutTextLayersInput = {
    where?: MemeWhereInput
    data: XOR<MemeUpdateWithoutTextLayersInput, MemeUncheckedUpdateWithoutTextLayersInput>
  }

  export type MemeUpdateWithoutTextLayersInput = {
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumMemeVisibilityFieldUpdateOperationsInput | $Enums.MemeVisibility
    status?: EnumMemeStatusFieldUpdateOperationsInput | $Enums.MemeStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    downloads?: DownloadUpdateManyWithoutMemeNestedInput
  }

  export type MemeUncheckedUpdateWithoutTextLayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumMemeVisibilityFieldUpdateOperationsInput | $Enums.MemeVisibility
    status?: EnumMemeStatusFieldUpdateOperationsInput | $Enums.MemeStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    downloads?: DownloadUncheckedUpdateManyWithoutMemeNestedInput
  }

  export type MemeCreateWithoutDownloadsInput = {
    title: string
    imageUrl: string
    userId?: number | null
    sessionId?: string | null
    visibility?: $Enums.MemeVisibility
    status?: $Enums.MemeStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    textLayers?: TextLayerCreateNestedManyWithoutMemeInput
  }

  export type MemeUncheckedCreateWithoutDownloadsInput = {
    id?: number
    title: string
    imageUrl: string
    userId?: number | null
    sessionId?: string | null
    visibility?: $Enums.MemeVisibility
    status?: $Enums.MemeStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    textLayers?: TextLayerUncheckedCreateNestedManyWithoutMemeInput
  }

  export type MemeCreateOrConnectWithoutDownloadsInput = {
    where: MemeWhereUniqueInput
    create: XOR<MemeCreateWithoutDownloadsInput, MemeUncheckedCreateWithoutDownloadsInput>
  }

  export type MemeUpsertWithoutDownloadsInput = {
    update: XOR<MemeUpdateWithoutDownloadsInput, MemeUncheckedUpdateWithoutDownloadsInput>
    create: XOR<MemeCreateWithoutDownloadsInput, MemeUncheckedCreateWithoutDownloadsInput>
    where?: MemeWhereInput
  }

  export type MemeUpdateToOneWithWhereWithoutDownloadsInput = {
    where?: MemeWhereInput
    data: XOR<MemeUpdateWithoutDownloadsInput, MemeUncheckedUpdateWithoutDownloadsInput>
  }

  export type MemeUpdateWithoutDownloadsInput = {
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumMemeVisibilityFieldUpdateOperationsInput | $Enums.MemeVisibility
    status?: EnumMemeStatusFieldUpdateOperationsInput | $Enums.MemeStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    textLayers?: TextLayerUpdateManyWithoutMemeNestedInput
  }

  export type MemeUncheckedUpdateWithoutDownloadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumMemeVisibilityFieldUpdateOperationsInput | $Enums.MemeVisibility
    status?: EnumMemeStatusFieldUpdateOperationsInput | $Enums.MemeStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    textLayers?: TextLayerUncheckedUpdateManyWithoutMemeNestedInput
  }

  export type TextLayerCreateManyMemeInput = {
    id?: number
    content: string
    xPosition: number
    yPosition: number
    fontSize?: number
    fontFamily?: string
    color?: string
    strokeColor?: string
    rotation?: number
    zIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DownloadCreateManyMemeInput = {
    id?: number
    userId?: number | null
    sessionId?: string | null
    downloadedAt?: Date | string
  }

  export type TextLayerUpdateWithoutMemeInput = {
    content?: StringFieldUpdateOperationsInput | string
    xPosition?: FloatFieldUpdateOperationsInput | number
    yPosition?: FloatFieldUpdateOperationsInput | number
    fontSize?: IntFieldUpdateOperationsInput | number
    fontFamily?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    strokeColor?: StringFieldUpdateOperationsInput | string
    rotation?: FloatFieldUpdateOperationsInput | number
    zIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TextLayerUncheckedUpdateWithoutMemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    xPosition?: FloatFieldUpdateOperationsInput | number
    yPosition?: FloatFieldUpdateOperationsInput | number
    fontSize?: IntFieldUpdateOperationsInput | number
    fontFamily?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    strokeColor?: StringFieldUpdateOperationsInput | string
    rotation?: FloatFieldUpdateOperationsInput | number
    zIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TextLayerUncheckedUpdateManyWithoutMemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    xPosition?: FloatFieldUpdateOperationsInput | number
    yPosition?: FloatFieldUpdateOperationsInput | number
    fontSize?: IntFieldUpdateOperationsInput | number
    fontFamily?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    strokeColor?: StringFieldUpdateOperationsInput | string
    rotation?: FloatFieldUpdateOperationsInput | number
    zIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DownloadUpdateWithoutMemeInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    downloadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DownloadUncheckedUpdateWithoutMemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    downloadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DownloadUncheckedUpdateManyWithoutMemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    downloadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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