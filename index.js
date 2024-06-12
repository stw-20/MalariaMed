require('express')().use(require('express').static(__dirname)).listen(9001, () => {console.log()})
