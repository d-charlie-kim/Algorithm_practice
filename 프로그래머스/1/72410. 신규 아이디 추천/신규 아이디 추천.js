function solution(new_id) {
    let after = '';
    const regExp = /[^a-z0-9\-_.]/g;

    after = new_id.toLowerCase();
    after = after.replace(regExp, '');
    after = after.replace(/\.+/g, '.');
    after = after.replace(/^\./, '');

    if (after.length === 0)
        after = 'a';
    if (after.length > 15)
        after = after.slice(0,15);
    after = after.replace(/\.$/, '');

    if (after.length < 3)
        after = after + after[after.length - 1].repeat(3 - after.length);
    
    return after;
}