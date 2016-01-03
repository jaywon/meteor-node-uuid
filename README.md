Meteor Node UUID library
==================

Simple Meteor wrapper for [node-uuid](https://github.com/broofa/node-uuid). No contribution to original library other than wrapping in Meteor package for inclusion through Meteor package manager > 0.9.0. No Meteorite support. Please refer to original author repo for usage.

Client and server installation and usage supported.

### Installation

With Meteor 0.9 and above, install using:

```sh
$ meteor add mdj:meteor-node-uuid
```

### Usage
```
// Generate a v1 (time-based) id
uuid.v1(); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'

// Generate a v4 (random) id
uuid.v4(); // -> '110ec58a-a0f2-4ac4-8393-c866d813b8d1'
```
