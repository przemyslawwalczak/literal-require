const escape = require('escape-regex-string')
const Path = require('path')
const package = require(Path.join(process.cwd(), 'package.json'))

const namespace = package.namespace || {}

const literals = []

for (let name in namespace) {
  let value = namespace[name]

  let literal
  while (literal = value.match(/\$\{\s*([^\s\}]+)\s*\}/)) {
    let [l, command] = literal
    value = value.replace(l, eval(command))
  }

  namespace[name] = Path.resolve(value)
  literals.push(escape(name))
}

const Module = require('module')
const NAMESPACE_LOOKUP = new RegExp(`${literals.join('|')}`)

if (Path.literal) {
  // NOTE: Some object might arise adding literal to `path` module..
  // But I like to keep things in one place if the place is already created :D

  // NOTE: Throwing an error if ever this module would have such name, just in case if...
  throw new Error('Path.literal is already defined')
}

Path.literal = function Literal(...path) {
  let resolved = this.join.apply(this, path)

  let lookup
  while (lookup = NAMESPACE_LOOKUP.exec(resolved)) {
    let [result] = lookup

    resolved = resolved.replace(result, namespace[result])
  }

  return resolved
}

// NOTE: We are not inviding original require.. we just making it cooler!

const _require = Module.prototype.require

Module.prototype.require = function require (...path) {
  try {
    return _require.apply(this, path)
  } catch(e) {
    return _require.call(this, Path.literal.apply(Path, path))
  }
}
