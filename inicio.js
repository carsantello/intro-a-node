module.exports = {
  historia: function(personaje, lugar, edad, villano, hobby) {
    if (edad > 18 && edad < 80) {
      return `${personaje} vivi na triste existencia por que no olograba encontrar
      el amor. Llevaba ${edad} años en este mundo, y no lograba salir de ${lugar}`
    } else if (edad > 80) {
      return `despues de vijar por el mundopor ${edad}, años ${personaje}, habia encontrado la sabiduria suficiente para saber que la verdaddera felicidad consiste en tener una mascota.`
    } else {
          return `Habia una vez un tipo llamado ${personaje} y
          el vivia en ${lugar} y tenia ${edad}`
        }
  }
}
