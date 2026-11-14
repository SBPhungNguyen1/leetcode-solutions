type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
    const stack: Obj = [obj];

    while (stack.length > 0) {
        let o = stack.pop()!;
        if (o instanceof Array) {
            for (let i = o.length; 0 <= i; i--) {
                const e = o[i];
                if (e instanceof Array || e instanceof Object) {
                    stack.push(e);
                } else if (!Boolean(e)) {
                    o.splice(i, 1);
                }
            }
        } else if (o instanceof Object) {
            for (const k in o) {
                const v = o[k];
                if (v instanceof Array || v instanceof Object) {
                    stack.push(v);
                } else if (!Boolean(v)) {
                    delete o[k];
                }
            }
        }
    }
        
    return obj;
};