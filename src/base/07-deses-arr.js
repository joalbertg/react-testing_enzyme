const returnArray = () => {
  return ['ABC', 123];
}

const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

export {
  returnArray as default
}

