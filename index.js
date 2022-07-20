function receivesAFunction (thing) {
    return thing()
}

function returnsANamedFunction() {
    return function name () {
        return thing
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        return thing
    }
}