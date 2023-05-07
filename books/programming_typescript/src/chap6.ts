import './zip'
// type ExistingUser = {
//   id: number;
//   name: string;
// };

// type NewUser = {
//   name: string;
// };

// function deleteUser(user: { id?: number; name: string }) {
//   delete user.id;
// }

// let existingUser:ExistingUser = {
//   id: 12333,
//   name: "i am a user",
// };

// deleteUser(existingUser);

// type LegacyUser = {
//   id: number | string;
//   name: string;
// };

// let legacyUser: LegacyUser = {
//   id: "79555",
//   name: 'xin yang'
// };

// deleteUser(legacyUser)

class Animal {}

class Bird extends Animal {
  chirp() {}
}

class Crow extends Bird {
  caw() {}
}

// function chirp(bird: Bird): Bird {
//   bird.chirp();
//   return bird;
// }

// chirp(new Animal)
// chirp(new Bird)
// chirp(new Crow)

function clone(f: (b: Bird) => Bird): void {}

// function birdToBird(b: Bird): Bird {
//   return b;
// }
// clone(birdToBird);

// function birdToCrow(b: Bird): Crow {
//   return b as Crow;
// }

// clone(birdToCrow);

// function birdToAnimal(b:Bird):Animal{
//     return b as Animal
// }
// clone(birdToAnimal)

// function animalToBird(a:Animal):Bird {
//     return a as Bird;
// }

// clone(animalToBird)

// function crowToBird(c:Crow):Bird {
//     return c as Bird
// }

// clone(crowToBird)

// // 类型拓宽
// let a = 'x';
// let b = 3;
// var c = true;
// const  d = {x:3}
// enum E {X,Y,Z}

// let e = E.X;
// const dd = 'x';
// let cc = {x:3} as const;
// let ee = [1, {x:2}] as const;
// let ff = null;

// function x () {
//     let a = null;
//     a = '222'
//     a = 1;
//     return a

// }

// let rc = x();

// type Options = {
//   baseURL: string;
//   cacheSize?: number;
//   tier?: "prod" | "dev";
// };

// class API {
//   constructor(private options: Options) {}
// }

// new API({
//   baseURL: "https://api.mysite.com",
//   tier: "prod",
// });

// new API({
//   baseURL: "https://api.mysite.com",
//   badTier: "prod",
// });
// new API({
//   baseURL: "https://api.mysite.com",
//   badTier: "prod",
// } as Options);

// let badoptions = {
//   baseURL: "https://api.mysite.com",
//   badTier: "prod",
// };
// new API(badoptions);

// let options:Options = {
//     baseURL: "https://api.mysite.com",
//     badTier: "prod",
// }

// new API(options);

// type Unit = "cm" | "px" | "%";

// type Width = {
//   unit: Unit;
//   value: number;
// };
// let units: Unit[] = ["px", "cm", "%"];

// function parseWidth(width: number | string | null | undefined): Width | null {
//   if (width == null) {
//     return null;
//   }
//   if (typeof width == "number") {
//     return {
//       unit: "px",
//       value: width,
//     };
//   }
//   let unit = parseUnit(width);
//   if (unit) {
//     return {
//       unit,
//       value: parseFloat(width),
//     };
//   }

//   return null;
// }

// function parseUnit(value: string): Unit | null {
//   for (let index = 0; index < units.length; index++) {
//     const element = units[index];
//     if(value.endsWith(element)){
//         return element;
//     }
//   }

//   return null;
// }

// type UserTextEvent = { type:"TextEvent", value: string ,target: HTMLInputElement};
// type UserMouseEvent = { type:"MouseEvent", value: [number, number],target: HTMLElement  };

// type UserEvent = UserTextEvent | UserMouseEvent;

// function handle(event: UserEvent) {
//   if (event.type === "TextEvent") {
//     event.value;
//     event.target;
//     return;
//   }
//   event.value;
//   event.target;
// }

// function getNextDay(w: Weekday): Day {
//   switch (w) {
//     case "Mon":
//       return "Tue";
//     // default:
//     //   return "Mon";
//   }
// }

function isBig(n: number): boolean {
  if (n >= 100) {
    return true;
  } else {
    return false;
  }
}

type APIResponse = {
  user: {
    userId: string;
    friendList: {
      count: number;
      friends: {
        firstName: string;
        lastName: string;
      }[];
    };
  };
};
type APIResponse2 = {
  user: {
    userId: string;
    friendList:FriendList;
  };
};
type FriendList2 = APIResponse["user"]["friendList"]['friends'];

type FriendList = {
  count: number;
  friends: {
    firstName: string;
    lastName: string;
  }[];
};

function getAPIResponse(): Promise<APIResponse> {
  return Promise.resolve({} as APIResponse);
}
function renderFriendList(friendList: unknown) {}

(async () => {
  let response = await getAPIResponse();
  renderFriendList(response.user.friendList);
})();

// type ResponseKeys = "user"
type ResponseKeys = keyof APIResponse;
// type UserKeys = "friendList" | "userId"
type UserKeys = keyof APIResponse["user"];



function getType<O extends object, K extends keyof O>(o: O, k: K): O[K] {
  return o[k];
}

type ActivityLog = {
  lastEvent: Date;
  events: {
    id: string;
    timestamp: Date;
    type: "Read" | "Write";
  }[];
};

let activityLog: ActivityLog = { lastEvent: new Date(), events: [] };

let lastEvent = getType(activityLog, "lastEvent");

type GetTypeFn = {
  <O extends object, K1 extends keyof O>(o: O, k1: K1): O[K1];
  <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(
    o: O,
    k1: K1,
    k2: K2
  ): O[K1][K2];

  <
    O extends object,
    K1 extends keyof O,
    K2 extends keyof O[K1],
    K3 extends keyof O[K1][K2]
  >(
    o: O,
    k1: K1,
    k2: K2,
    k3: K3
  ): O[K1][K2][K3];
};

let getType2: GetTypeFn = (ob: any, ...keys: string[]) => {
  let result = ob;
  keys.forEach((k) => (result = result[k]));
  return result;
};

let test = getType2(activityLog, "events", 0, "type");
// let test2 =getType2(activityLog, 'bad')




type Weekday = "Mon" | "Tue" | "Web" | "Thu" | "Fri";
type Day = Weekday | "Sat" | "Sun";
// let nextDay :Record<Weekday, Day> = {
//     Mon: 'Tue',
// }

// type HHH = Record<string, number>

// let nextDay2: { [K in Weekday]: Day } = {
//   Mon: "Tue",
// };

// interface SelectOption {
//   id: string;
//   value: string;
//   [key:string]:any
// }
// // 
// let myoption: SelectOption[] = [{ id: '1', value: '1', icon: 'ddd' }];



type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

type  Row2 = MyRecord<string, number>

type Account = {
  id: number;
  isEmployee: boolean;
  notes: string[];
};
// 所有字段可选

type OptionalAccount = {
  [K in keyof Account]?: Account[K];
};
type NullableAccount = {
  [K in keyof Account]: Account[K] | null;
};
type ReadonlyAccount = {
  readonly [K in keyof Account]: Account[K];
};
type WriteableAccount = {
  -readonly [K in keyof ReadonlyAccount]: Account[K];
};
//
type Account3 = {
  [K in keyof OptionalAccount]-?: Account[K];
};

type SubAccount = Pick<Account, 'id'| 'isEmployee'>

export type Currency = {
  unit: "USD" | "JPY" | "EUR";
  value: number;
};

export const Currency: any = {
  DEFAULT: "USD",
  from(value: number, unit = Currency.DEFAULT): Currency {
    return {
      unit,
      value,
    };
  },
};

let aaa = [1, true];

function tuple<T extends unknown[]>(...ts: T): T {
  return ts;
}

let t1 = tuple(1, true);

//
// function isString(str: unknown): boolean {
//   return typeof str === "string";
// }
function isString(str: unknown): str is string {
  return typeof str === "string";
}

let strTest1 = isString("x");
let strTest2 = isString(["x"]);

function parseInput(input: string | number) {
  let formattedInput: string;
  if (isString(input)) {
    formattedInput = input.toUpperCase();
  }
}

type IsString<T> = T extends string ? true : false;

type A = IsString<string>;
type B = IsString<number>;




type ToArray<T> = T[];
type NA = ToArray<string>;
type NSA = ToArray<string | number>;

type ToArray2<T> = T extends unknown ? T[] : T[];
type NA2 = ToArray2<string>;
type NSA2 = ToArray2<string | number>;

type WithOut<T, U> = T extends U ? never : T;

type AA = WithOut<number | string | boolean, string>;
type AAA1 = WithOut<number, string> | WithOut< string, string> | WithOut< boolean, string>
type AAAA =number | never | boolean
// infer

type ElementType<T> = T extends unknown[] ? T[number]:T;

type AAA = ElementType<number[]>

type ElementType2<T> = T extends (infer U)[] ? U : T;

type BBB = ElementType2<number[]>

type ElementUgly<T, U> = T extends U[] ? U : T;
type CC = ElementUgly<number[],number>
type CCc = number

type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never;

type F = (typeof Array)["prototype"]["slice"];
type FA = SecondArg<F>;

///内置

type D = number | string;
type E = string;

type DE = Exclude<D, E>;
type DE2 = Extract<D, E>;

type G = { a?: number | null };
type GG = NonNullable<G["a"]>;

type FF = (a: number) => string;
type RF = ReturnType<FF>;

type IT = { new (): ITB };
type ITB = { b: number };
type I = InstanceType<IT>;


// 6.6 

function formatInpt(input:string){
  return input
}
function getUserInput():string|number {
  return ''
}

let input = getUserInput();

formatInpt(input as string )
formatInpt(<string>input )

function addToList(list:string[], item:string ){

}

addToList('this is really,' as any, 'really unsafe');


// type Dialog = {
//    id?:string
// }

// function closeDialog(dialog:Dialog){
//   if(!dialog.id){
//     return ;
//   }

//   setTimeout(()=>{
//     removeFromDom(
//       dialog,
//       document.getElementById(dialog.id!)!
//     )
//   })
// }

// function removeFromDom(dialog:Dialog, element:Element){
//   element.parentNode!.removeChild(element)
//   delete dialog.id;
// }


// type VisibleDialog = {id:string}
// type DestroyedDialog = {}
// type Dialog = VisibleDialog | DestroyedDialog;
// function closeDialog(dialog:Dialog){
//   if(!('id' in dialog)){
//     return ;
//   }

//   setTimeout(()=>{
//     removeFromDom(
//       dialog,
//       document.getElementById(dialog.id)!
//     )
//   })
// }

// function removeFromDom(dialog:VisibleDialog, element:Element){
//   element.parentNode!.removeChild(element)
//   delete dialog.id;
// }


// let userId!:string
// fetchUser()

// userId.toLowerCase();

// function fetchUser(){
//   userId  = localStorage.getItem('userId')?? ''
// }


// 6.7 

// type CompanyID = string
// type OrderID = string
// type UserID = string

type ID = CompanyID | OrderID | UserID

function queryForUser(id:UserID){
 // ...
}

// let id:CompanyID = 'bd8s9d78'
// queryForUser(id);


type CompanyID = string & {readonly brand: unique symbol}
type OrderID = string & {readonly brand: unique symbol}
type UserID = string & {readonly brand: unique symbol}


// 另一种方式

function CompanyID(id:string) {
  return id as CompanyID;
}

function OrderID (id:string){
  return id as OrderID
}
function UserID (id:string){
  return id as UserID
}

let companyId = CompanyID('a9jd9jb9')
let orderId = OrderID('8937nvyu34')
let userId = UserID('j9304583');

// queryForUser(userId);
// queryForUser(companyId);



// 6.8

[1, 2, 3].map(n => n*2).zip(['a', 'b', 'c'])

