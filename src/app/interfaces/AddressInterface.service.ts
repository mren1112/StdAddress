export interface Oldaddr {
  newaddr?: (NewaddrEntity)[] | null;
  oldaddr?: (OldaddrEntity)[] | null;
}
export interface NewaddrEntity {
  newmobileno: string;
  newprovinceno: string;
  newaddress: string;
  newdistrict: string;
  newsoi: string;
  newpostcode: string;
  newroad: string;
  newprovincename: string;
  newbuildno: string;
  newarea: string;
  newmoono: string;
  newcuntryno: string;
  newemail: string;
}
export interface OldaddrEntity {
  oldmobileno: string;
  oldprovinceno: string;
  oldaddress: string;
  olddistrict: string;
  oldsoi: string;
  oldpostcode: string;
  oldroad: string;
  oldprovincename: string;
  oldbuildno: string;
  oldarea: string;
  oldmoono: string;
  oldcuntryno: string;
  oldemail: string;
}


// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class OldaddrProxy {
  public readonly newaddr: NewaddrEntityProxy[] | null;
  public readonly oldaddr: OldaddrEntityProxy[] | null;
  public static Parse(d: string): OldaddrProxy {
    return OldaddrProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): OldaddrProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof (d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.newaddr, field + ".newaddr");
    if (d.newaddr) {
      for (let i = 0; i < d.newaddr.length; i++) {
        d.newaddr[i] = NewaddrEntityProxy.Create(d.newaddr[i], field + ".newaddr" + "[" + i + "]");
      }
    }
    if (d.newaddr === undefined) {
      d.newaddr = null;
    }
    checkArray(d.oldaddr, field + ".oldaddr");
    if (d.oldaddr) {
      for (let i = 0; i < d.oldaddr.length; i++) {
        d.oldaddr[i] = OldaddrEntityProxy.Create(d.oldaddr[i], field + ".oldaddr" + "[" + i + "]");
      }
    }
    if (d.oldaddr === undefined) {
      d.oldaddr = null;
    }
    return new OldaddrProxy(d);
  }
  private constructor(d: any) {
    this.newaddr = d.newaddr;
    this.oldaddr = d.oldaddr;
  }
}

export class NewaddrEntityProxy {
  public readonly newmobileno: string;
  public readonly newprovinceno: string;
  public readonly newaddress: string;
  public readonly newdistrict: string;
  public readonly newsoi: string;
  public readonly newpostcode: string;
  public readonly newroad: string;
  public readonly newprovincename: string;
  public readonly newbuildno: string;
  public readonly newarea: string;
  public readonly newmoono: string;
  public readonly newcuntryno: string;
  public readonly newemail: string;
  public static Parse(d: string): NewaddrEntityProxy {
    return NewaddrEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): NewaddrEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof (d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.newmobileno, false, field + ".newmobileno");
    checkString(d.newprovinceno, false, field + ".newprovinceno");
    checkString(d.newaddress, false, field + ".newaddress");
    checkString(d.newdistrict, false, field + ".newdistrict");
    checkString(d.newsoi, false, field + ".newsoi");
    checkString(d.newpostcode, false, field + ".newpostcode");
    checkString(d.newroad, false, field + ".newroad");
    checkString(d.newprovincename, false, field + ".newprovincename");
    checkString(d.newbuildno, false, field + ".newbuildno");
    checkString(d.newarea, false, field + ".newarea");
    checkString(d.newmoono, false, field + ".newmoono");
    checkString(d.newcuntryno, false, field + ".newcuntryno");
    checkString(d.newemail, false, field + ".newemail");
    return new NewaddrEntityProxy(d);
  }
  private constructor(d: any) {
    this.newmobileno = d.newmobileno;
    this.newprovinceno = d.newprovinceno;
    this.newaddress = d.newaddress;
    this.newdistrict = d.newdistrict;
    this.newsoi = d.newsoi;
    this.newpostcode = d.newpostcode;
    this.newroad = d.newroad;
    this.newprovincename = d.newprovincename;
    this.newbuildno = d.newbuildno;
    this.newarea = d.newarea;
    this.newmoono = d.newmoono;
    this.newcuntryno = d.newcuntryno;
    this.newemail = d.newemail;
  }
}

export class OldaddrEntityProxy {
  public readonly oldmobileno: string;
  public readonly oldprovinceno: string;
  public readonly oldaddress: string;
  public readonly olddistrict: string;
  public readonly oldsoi: string;
  public readonly oldpostcode: string;
  public readonly oldroad: string;
  public readonly oldprovincename: string;
  public readonly oldbuildno: string;
  public readonly oldarea: string;
  public readonly oldmoono: string;
  public readonly oldcuntryno: string;
  public readonly oldemail: string;
  public static Parse(d: string): OldaddrEntityProxy {
    return OldaddrEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): OldaddrEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof (d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.oldmobileno, false, field + ".oldmobileno");
    checkString(d.oldprovinceno, false, field + ".oldprovinceno");
    checkString(d.oldaddress, false, field + ".oldaddress");
    checkString(d.olddistrict, false, field + ".olddistrict");
    checkString(d.oldsoi, false, field + ".oldsoi");
    checkString(d.oldpostcode, false, field + ".oldpostcode");
    checkString(d.oldroad, false, field + ".oldroad");
    checkString(d.oldprovincename, false, field + ".oldprovincename");
    checkString(d.oldbuildno, false, field + ".oldbuildno");
    checkString(d.oldarea, false, field + ".oldarea");
    checkString(d.oldmoono, false, field + ".oldmoono");
    checkString(d.oldcuntryno, false, field + ".oldcuntryno");
    checkString(d.oldemail, false, field + ".oldemail");
    return new OldaddrEntityProxy(d);
  }
  private constructor(d: any) {
    this.oldmobileno = d.oldmobileno;
    this.oldprovinceno = d.oldprovinceno;
    this.oldaddress = d.oldaddress;
    this.olddistrict = d.olddistrict;
    this.oldsoi = d.oldsoi;
    this.oldpostcode = d.oldpostcode;
    this.oldroad = d.oldroad;
    this.oldprovincename = d.oldprovincename;
    this.oldbuildno = d.oldbuildno;
    this.oldarea = d.oldarea;
    this.oldmoono = d.oldmoono;
    this.oldcuntryno = d.oldcuntryno;
    this.oldemail = d.oldemail;
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function checkArray(d: any, field: string): void {
  if (!Array.isArray(d) && d !== null && d !== undefined) {
    errorHelper(field, d, "array", true);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof (d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "string", nullable);
  }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}
