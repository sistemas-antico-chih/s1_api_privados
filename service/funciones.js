function convertirFechaLarga(fecha) {
  let year = fecha.getFullYear();
  let month = fecha.getMonth() + 1 < 10 ? '0' + (fecha.getMonth() + 1) : fecha.getMonth() + 1;
  let day = fecha.getDate() < 10 ? '0' + (fecha.getDate()) : fecha.getDate();
  let hour = fecha.getHours() < 10 ? '0' + (fecha.getHours()) : fecha.getHours();
  let minute = fecha.getMinutes() < 10 ? '0' + (fecha.getMinutes()) : fecha.getMinutes();
  let seconds = fecha.getSeconds() < 10 ? '0' + (fecha.getSeconds()) : fecha.getSeconds();
  return year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + seconds + 'Z';
}

function convertirFechaCorta(fecha) {
  let y = fecha.getFullYear();
  let m = fecha.getMonth() + 1 < 10 ? '0' + (fecha.getMonth() + 1) : fecha.getMonth() + 1;
  let d = fecha.getDate() < 10 ? '0' + (fecha.getDate()) : fecha.getDate();
  return y + '-' + m + '-' + d;
}

function datosGenerales(datosGenerales) {
  if (datosGenerales.segundoApellido === null) {
    datosGenerales.segundoApellido = "";
  }
  if (datosGenerales.nacionalidad === "MEX") {
    datosGenerales.nacionalidad = "MX"
  }
  if (datosGenerales.nacionalidad !== "MEX") {
    datosGenerales.nacionalidad = datosGenerales.paisNacimiento;
  }
  if (datosGenerales.correoElectronico) {
    if (datosGenerales.correoElectronico.institucional === null)
      datosGenerales.correoElectronico.institucional = datosGenerales.correoElectronico.personal;
  }
  return datosGenerales;
}

function datosCurricularesDeclarante(datosCurricularesDeclarante) {
  if (datosCurricularesDeclarante.escolaridad.length >= 1) {
    datosCurricularesDeclarante.escolaridad.forEach((n) => {
      if (n.carreraAreaConocimiento === null) {
        n.carreraAreaConocimiento = "";
      }
      n.fechaObtencion = convertirFechaCorta(n.fechaObtencion);
      return n;
    })
  }
  return datosCurricularesDeclarante;
}

function datosEmpleoCargoComision(datosEmpleoCargoComision) {
  datosEmpleoCargoComision.fechaTomaPosesion = convertirFechaCorta(datosEmpleoCargoComision.fechaTomaPosesion);
  if (datosEmpleoCargoComision.telefonoOficina.extension === null) {
    datosEmpleoCargoComision.telefonoOficina.extension = "";
  }
  if (datosEmpleoCargoComision.telefonoOficina.telefono === null) {
    datosEmpleoCargoComision.telefonoOficina.telefono = "";
  }
  if (datosEmpleoCargoComision.domicilioMexico) {
    if (datosEmpleoCargoComision.domicilioMexico.numeroInterior === null) {
      datosEmpleoCargoComision.domicilioMexico.numeroInterior = "";
    }
  }
  if (datosEmpleoCargoComision.domicilioExtranjero) {
    if (datosEmpleoCargoComision.domicilioExtranjero.numeroInterior === null) {
      datosEmpleoCargoComision.domicilioExtranjero.numeroInterior = "";
    }
  }
  return datosEmpleoCargoComision;
}


function experienciaLaboral(experienciaLaboral) {
  if (experienciaLaboral.experiencia.length >= 1) {
    var experiencia = experienciaLaboral.experiencia;
    experiencia.forEach((n) => {
      n.fechaIngreso = convertirFechaCorta(n.fechaIngreso);
      n.fechaEgreso = convertirFechaCorta(n.fechaEgreso);
      if (n.rfc === null) {
        n.rfc = "";
      }
      if (n.ambitoSector.clave === "PRV") {
        if (n.nivelOrdenGobierno === null) {
          n.nivelOrdenGobierno = "";
        }
        if (n.ambitoPublico === null) {
          n.ambitoPublico = "";
        }
        if (n.nombreEntePublico === null) {
          n.nombreEntePublico = "";
        }
        if (n.areaAdscripcion === null) {
          n.areaAdscripcion = "";
        }
        if (n.empleoCargoComision === null) {
          n.empleoCargoComision = "";
        }
        if (n.funcionPrincipal === null) {
          n.funcionPrincipal = "";
        }
      }
      if (n.ambitoSector.clave === "PUB") {
        if (n.nombreEmpresaSociedadAsociacion === null) {
          n.nombreEmpresaSociedadAsociacion = "";
        }
        if (n.area === null) {
          n.area = "";
        }
        if (n.puesto === null) {
          n.puesto = "";
        }
        if (n.sector === null) {
          n.sector = "";
        }
      }
      if (n.ambitoSector.clave === "OTR") {
        if (n.nivelOrdenGobierno === null) {
          n.nivelOrdenGobierno = "";
        }
        if (n.ambitoPublico === null) {
          n.ambitoPublico = "";
        }
        if (n.nombreEntePublico === null) {
          n.nombreEntePublico = "";
        }
        if (n.areaAdscripcion === null) {
          n.areaAdscripcion = "";
        }
        if (n.empleoCargoComision === null) {
          n.empleoCargoComision = "";
        }
        if (n.funcionPrincipal === null) {
          n.funcionPrincipal = "";
        }
      }
      return n;
    })
  }
  return experiencia;
}

function ingresos(ingresos, tipoDeclaracion) {
  if (tipoDeclaracion === "MODIFICACION") {
    ingresos['remuneracionAnualCargoPublico'] = ingresos['remuneracionMensualCargoPublico'];
    ingresos['otrosIngresosAnualesTotal'] = ingresos['otrosIngresosMensualesTotal'];
    ingresos['ingresoAnualNetoParejaDependiente'] = ingresos['ingresoMensualNetoParejaDependiente'];
    ingresos['ingresoAnualNetoDeclarante'] = ingresos['ingresoMensualNetoDeclarante'];
    ingresos['totalIngresosAnualesNetos'] = ingresos['totalIngresosMensualesNetos'];
    delete ingresos['remuneracionMensualCargoPublico'];
    delete ingresos['otrosIngresosMensualesTotal'];
    delete ingresos['ingresoMensualNetoParejaDependiente'];
    delete ingresos['ingresoMensualNetoDeclarante'];
    delete ingresos['totalIngresosMensualesNetos'];
  }
  if (tipoDeclaracion === "CONCLUSION") {
    ingresos['remuneracionConclusionCargoPublico'] = ingresos['remuneracionMensualCargoPublico'];
    ingresos['otrosIngresosConclusionTotal'] = ingresos['otrosIngresosMensualesTotal'];
    ingresos['ingresoConclusionNetoParejaDependiente'] = ingresos['ingresoMensualNetoParejaDependiente'];
    ingresos['ingresoConclusionNetoDeclarante'] = ingresos['ingresoMensualNetoDeclarante'];
    ingresos['totalIngresosConclusionNetos'] = ingresos['totalIngresosMensualesNetos'];
    delete ingresos['remuneracionMensualCargoPublico'];
    delete ingresos['otrosIngresosMensualesTotal'];
    delete ingresos['ingresoMensualNetoParejaDependiente'];
    delete ingresos['ingresoMensualNetoDeclarante'];
    delete ingresos['totalIngresosMensualesNetos'];
  }
  if (ingresos.enajenacion === undefined) {
    let bienesMuebles;
    bienesMuebles = {
      remuneracionTotal: { valor: 0, moneda: 'MXN' },
      bienes: []
    }
    ingresos['enajenacionBienes'] = bienesMuebles;
  }
  return ingresos;
}

function actividadAnualAnterior(actividadAnualAnterior) {
  actividadAnualAnterior.fechaIngreso = convertirFechaCorta(actividadAnualAnterior.fechaIngreso);
  actividadAnualAnterior.fechaConclusion = convertirFechaCorta(actividadAnualAnterior.fechaConclusion);
  return actividadAnualAnterior;
}

function datosPareja(datosPareja) {
  datosPareja.fechaNacimiento = convertirFechaCorta(datosPareja.fechaNacimiento);
  datosPareja.ninguno = false;
  if (datosPareja.actividadLaboralSectorPublico) {
    datosPareja.actividadLaboralSectorPublico.fechaIngreso = convertirFechaCorta(datosPareja.actividadLaboralSectorPublico.fechaIngreso)
  }
  if (datosPareja.actividadLaboralSectorPrivadoOtro) {
    datosPareja.actividadLaboralSectorPrivadoOtro.fechaIngreso = convertirFechaCorta(datosPareja.actividadLaboralSectorPrivadoOtro.fechaIngreso)
  }
  if (datosPareja.domicilioMexico) {
    if (datosPareja.domicilioMexico.numeroInterior === null) {
      datosPareja.domicilioMexico.numeroInterior = "";
    }
  }
  if (datosPareja.domicilioExtranjero) {
    if (datosPareja.domicilioExtranjero.numeroInterior === null) {
      datosPareja.domicilioExtranjero.numeroInterior = "";
    }
  }
  if (datosPareja.actividadLaboralSectorPrivadoOtro) {
    if (datosPareja.actividadLaboralSectorPrivadoOtro.rfc === null) {
      datosPareja.actividadLaboralSectorPrivadoOtro.rfc = "";
    }
  }
  if (datosPareja.rfc === null) {
    datosPareja.rfc = "";
  }
  if (datosPareja.curp === null) {
    datosPareja.curp = "";
  }
  if (datosPareja.segundoApellido === null) {
    datosPareja.segundoApellido = "";
  }
  if (datosPareja.actividadLaboral.clave === 'OTR') {
    datosPareja.actividadLaboral.clave = 'OTRO'
  }
  return datosPareja;
}

function bienesInmuebles(bienInmueble) {
  bienInmueble.forEach((n) => {
    n.fechaAdquisicion = convertirFechaCorta(n.fechaAdquisicion);
    if (n.titular) {
      if (n.titular[0].clave != "DEC") {
        delete n.tipoInmueble;
        delete n.titular;
        delete n.porcentajePropiedad;
        delete n.superficieTerreno;
        delete n.superficieConstruccion;
        delete n.tercero;
        delete n.transmisor;
        delete n.formaAdquisicion;
        delete n.formaPago;
        delete n.valorAdquisicion;
        delete n.fechaAdquisicion;
        delete n.datoIdentificacion;
        delete n.valorConformeA;
        if (n.domicilioMexico) {
          delete n.domicilioMexico;
        }
        if (n.domicilioExtranjero) {
          delete n.domicilioExtranjero;
        }
      }
      else {
        if (n.titular[0].clave === "DEC") {
          if (n.superficieConstruccion.unidad === null) {
            n.superficieConstruccion.unidad = 'm2';
          }
          if (n.superficieTerreno.unidad === null) {
            n.superficieTerreno.unidad = 'm2';
          }
          if (n.domicilioExtranjero === null) {
            delete n.domicilioExtranjero;
          }
          if (n.domicilioMexico === null) {
            delete n.domicilioMexico;
          }
          else {
            if (n.tercero[0]) {
              if (n.tercero[0].tipoPersona) {
                if (n.tercero[0].tipoPersona === "FISICA" || n.tercero[0].tipoPersona === null) {
                  delete n.tercero;
                }
                else {
                  if (n.tercero[0].nombreRazonSocial) {
                    if (n.tercero[0].nombreRazonSocial === null) {
                      n.tercero[0].nombreRazonSocial = "";
                    }
                  }

                  if (n.tercero[0].rfc === null) {
                    n.tercero[0].rfc = "";
                  }
                }
              }
            }
            if (n.transmisor[0]) {
              if (n.transmisor[0].tipoPersona) {
                if (n.transmisor[0].tipoPersona === "FISICA" || n.transmisor[0].tipoPersona === null) {
                  delete n.transmisor;
                }
                else {
                  if (n.transmisor[0].nombreRazonSocial) {
                    if (n.transmisor[0].nombreRazonSocial === null) {
                      n.transmisor[0].nombreRazonSocial = "";
                    }
                  }
                  if (n.transmisor[0].rfc === null) {
                    n.transmisor[0].rfc = "";
                  }
                }
              }
            }
            if (n.motivoBaja === null) {
              delete n.motivoBaja;
            }
            if (n.formaPago === 'CREDITO') {
              n.formaPago = 'CRÉDITO';
            }
            if (n.formaPago === 'NO_APLICA') {
              n.formaPago = 'NO APLICA';
            }
            if (n.valorConformeA === 'ESCRITURA_PUBLICA') {
              n.valorConformeA = 'ESCRITURA PÚBLICA';
            }
            n.superficieTerreno.valor = Math.floor(n.superficieTerreno.valor);
            n.superficieConstruccion.valor = Math.floor(n.superficieConstruccion.valor);
          }
        }
      }
    }
    return n;
  })
  return bienInmueble;
}

function vehiculos(vehiculo) {
  vehiculo.forEach((n) => {
    n.fechaAdquisicion = convertirFechaCorta(n.fechaAdquisicion);
    if (n.titular) {
      if (n.titular[0].clave != "DEC") {
        delete n.tipoVehiculo;
        delete n.titular;
        delete n.transmisor;
        delete n.marca;
        delete n.modelo;
        delete n.anio;
        delete n.numeroSerieRegistro;
        delete n.tercero;
        delete n.lugarRegistro;
        delete n.formaAdquisicion;
        delete n.formaPago;
        delete n.valorAdquisicion;
        delete n.fechaAdquisicion;
        delete n.motivoBaja;
      }
      else {
        if (n.titular[0].clave === "DEC") {
          if (n.tercero[0].tipoPersona) {
            if (n.tercero[0].tipoPersona === "FISICA" || n.tercero[0].tipoPersona === null) {
              delete n.tercero[0];
            }
          }
          else {
            if (n.tercero[0].nombreRazonSocial) {
              if (n.tercero[0].nombreRazonSocial === null) {
                n.tercero[0].nombreRazonSocial = "";
              }
            }
            if (n.tercero[0].rfc === null) {
              n.tercero[0].rfc = "";
            }
            if (n.transmisor[0].tipoPersona) {
              if (n.transmisor[0].tipoPersona === "FISICA" || n.transmisor[0].tipoPersona === null) {
                delete n.transmisor[0];
              }
              else {
                if (n.transmisor[0].nombreRazonSocial) {
                  if (n.transmisor[0].nombreRazonSocial === null) {
                    n.transmisor[0].nombreRazonSocial = "";
                  }
                  if (n.transmisor[0].rfc === null) {
                    n.transmisor[0].rfc = "";
                  }
                }
                if (n.lugarRegistro.pais) {
                  if (n.lugarRegistro.pais === null || !n.lugarRegistro.pais) {
                    n.lugarRegistro.pais = "MX";
                  }
                  if (n.lugarRegistro.entidadFederativa === null) {
                    n.lugarRegistro.entidadFederativa = "";
                  }
                  if (n.lugarRegistro.pais != 'MX') {
                    delete n.lugarRegistro.entidadFederativa;
                  }
                }
                if (n.motivoBaja === null) {
                  delete n.motivoBaja;
                }
                if (n.formaPago === 'CREDITO') {
                  n.formaPago = 'CRÉDITO';
                }
                if (n.formaPago === 'NO_APLICA') {
                  n.formaPago = 'NO APLICA';
                }
              }
            }
          }
        }
      }
    }
    return n;
  })
  return vehiculo;
}

function bienesMuebles(bienMueble) {
  bienMueble.forEach((n) => {
    n.fechaAdquisicion = convertirFechaCorta(n.fechaAdquisicion);
    if (n.titular) {
      if (n.titular[0].clave != "DEC") {
        delete n.tipoBien;
        delete n.titular;
        delete n.tercero;
        delete n.transmisor;
        delete n.formaAdquisicion;
        delete n.formaPago;
        delete n.valorAdquisicion;
        delete n.fechaAdquisicion;
        delete n.descripcionGeneralBien;
        delete n.datoIdentificacion;
        delete n.motivoBaja;
      }
      else {
        if (n.titular[0].clave === "DEC") {
          if (n.tercero[0].tipoPersona) {
            if (n.tercero[0].tipoPersona === "FISICA" || n.tercero[0].tipoPersona === null) {
              delete n.tercero[0];
            }
          }
          else {
            if (n.tercero[0].nombreRazonSocial) {
              if (n.tercero[0].nombreRazonSocial === null) {
                n.tercero[0].nombreRazonSocial = "";
              }
            }
            if (n.tercero[0].rfc === null) {
              n.tercero[0].rfc = "";
            }
            if (n.transmisor[0]) {
              if (n.transmisor[0].tipoPersona) {
                if (n.transmisor[0].tipoPersona === "FISICA" || n.transmisor[0].tipoPersona === null) {
                  delete n.transmisor[0];
                }
                else {
                  if (n.transmisor[0].nombreRazonSocial === null) {
                    n.transmisor[0].nombreRazonSocial = "";
                  }
                  if (n.transmisor[0].rfc === null) {
                    n.transmisor[0].rfc = "";
                  }
                }
              }
            }
            if (n.motivoBaja === null) {
              delete n.motivoBaja;
            }
            if (n.formaPago === 'CREDITO') {
              n.formaPago = 'CRÉDITO';
            }
            if (n.formaPago === 'NO_APLICA') {
              n.formaPago = 'NO APLICA';
            }
          }
        }
      }
    }
    return n;
  })
  return bienMueble;
}

function adeudosPasivos(adeudo) {
  adeudo.forEach((n) => {
    n.fechaAdquisicion = convertirFechaCorta(n.fechaAdquisicion);
    if (n.titular) {
      if (n.titular[0].clave != "DEC") {
        delete n.tipoAdeudo;
        delete n.titular;
        delete n.numeroCuentaContrato;
        delete n.fechaAdquisicion;
        delete n.montoOriginal;
        delete n.saldoInsolutoSituacionActual;
        delete n.tercero;
        delete n.otorganteCredito;
        delete n.localizacionAdeudo;
      }
    }
    else {
      if (n.titular[0].clave === "DEC") {
        if (n.tercero[0].tipoPersona) {
          if (n.tercero[0].tipoPersona === "FISICA") {
            delete n.tercero[0];
          }
        }
        else {
          if (n.tercero[0].nombreRazonSocial) {
            if (n.tercero[0].nombreRazonSocial === null) {
              n.tercero[0].nombreRazonSocial = "";
            }
          }
          if (n.tercero[0].rfc === null) {
            n.tercero[0].rfc = "";
          }
          if (n.montoOriginal) {
            if (n.montoOriginal.moneda === null) {
              n.montoOriginal.moneda = "MXN";
            }
          }
          if (n.otorganteCredito.tipoPersona) {
            if (n.otorganteCredito.tipoPersona === "FISICA") {
              delete n.otorganteCredito;
            }
            else {
              if (n.otorganteCredito.tipoPersona === null) {
                n.otorganteCredito.tipoPersona = "";
              }
              if (n.otorganteCredito.nombreInstitucion === null) {
                n.otorganteCredito.nombreInstitucion = "";
              }
              if (n.otorganteCredito.rfc === null) {
                n.otorganteCredito.rfc = "";
              }
            }
          }
          if (n.saldoInsolutoSituacionActual) {
            if (n.saldoInsolutoSituacionActual.moneda === null) {
              n.saldoInsolutoSituacionActual.moneda = "MXN";
            }
          }
          if (n.localizacionAdeudo) {
            if (n.localizacionAdeudo.pais === null) {
              n.localizacionAdeudo.pais = "MX";
            }
          }
          if (n.motivoBaja === null) {
            delete n.motivoBaja;
          }
        }
      }
    }
    return n;
  })
  return adeudo;
}

function inversionesCuentasValores(inversion) {
  inversion.forEach((n) => {
    if (n.titular) {
      if (n.titular[0].clave != "DEC") {
        delete n.tipoInversion;
        delete n.titular;
        delete n.subTipoInversion;
        delete n.tercero;
        delete n.numeroCuentaContrato;
        delete n.localizacionInversion;
        delete n.saldoSituacionActual;
      }
      else {
        if (n.titular[0].clave === "DEC") {
          if (n.tercero[0].tipoPersona) {
            if (n.tercero[0].tipoPersona === "FISICA") {
              delete n.tercero[0];
            }
          }
          else {
            if (n.tercero[0].nombreRazonSocial === null) {
              n.tercero[0].nombreRazonSocial = "";
            }
            if (n.tercero[0].rfc === null) {
              n.tercero[0].rfc = "";
            }
            if (n.motivoBaja === null) {
              n.motivoBaja = "";
            }
            if (n.localizacionInversion) {
              if (n.localizacionInversion.institucionRazonSocial === null) {
                n.localizacionAdeudo.institucionRazonSocial = "";
              }
              if (n.localizacionInversion.rfc === null) {
                n.localizacionInversion.rfc = "";
              }
              if (n.localizacionInversion.pais === null) {
                n.localizacionInversion.pais = "MX";
              }
            }
            if (n.tercero[0].tipoPersona === null) {
              delete n.tercero;
            }
            else {
              if (n.tercero[0].nombreRazonSocial === null) {
                n.tercero[0].nombreRazonSocial = "";
              }
              if (n.tercero[0].rfc === null) {
                n.tercero[0].rfc = "";
              }
            }
            if (n.motivoBaja === null) {
              delete n.motivoBaja;
            }
            if (n.saldoSituacionActual) {
              if (n.saldoSituacionActual.moneda === null) {
                n.saldoSituacionActual = "MXN";
              }
            }
          }
        }
      }
    }
    return n;
  })
  return inversion;
}

function prestamoComodato(prestamo) {
  prestamo.forEach((n) => {
    if (n.duenoTitular) {
      if (n.duenoTitular.tipoDuenoTitular != "FISICA") {
        if (n.tipoBien) {
          if (n.tipoBien.inmueble === null) {
            delete n.tipoBien.inmueble;
          }
          if (n.tipoBien.inmueble) {
            if (n.tipoBien.inmueble.domicilioMexico) {
              if (n.tipoBien.inmueble.domicilioMexico.numeroInterior === null) {
                n.tipoBien.inmueble.domicilioMexico.numeroInterior = "";
              }
            }
            if (n.tipoBien.inmueble.domicilioExtranjero) {
              if (n.tipoBien.inmueble.domicilioExtranjero.numeroInterior === null) {
                n.tipoBien.inmueble.domicilioExtranjero.numeroInterior = "";
              }
            }
          }
          if (n.tipoBien.vehiculo) {
            if (n.tipoBien.vehiculo === null) {
              delete n.tipoBien.vehiculo;
            }
            if (n.tipoBien.vehiculo.lugarRegistro.pais === null) {
              n.tipoBien.vehiculo.lugarRegistro.pais = 'MX';
            }
            if (n.tipoBien.vehiculo.lugarRegistro.pais != 'MX') {
              delete n.tipoBien.vehiculo.lugarRegistro.entidadFederativa;
            }
          }
        }
      }
      else {
        if (n.duenoTitular.tipoDuenoTitular === "FISICA") {
          delete n.tipoBien;
          delete n.duenoTitular;
        }
      }
    }
    return n;
  })
  return prestamo;
}

function participacion(participacion) {
  participacion.forEach((n) => {
    if (n.tipoRelacion) {
      if (n.tipoRelacion != "DECLARANTE") {
        delete n.tipoRelacion;
        delete n.nombreEmpresaSociedadAsociacion;
        delete n.rfc;
        delete n.porcentajeParticipacion;
        delete n.recibeRemuneracion;
        delete n.montoMensual;
        delete n.ubicacion;
        delete n.sector;
      }
      else {
        if (n.tipoRelacion === "DECLARANTE") {
          if (n.tipoOperacion === null) {
            delete n.tipoOperacion;
          }
          if (n.recibeRemuneracion === false) {
            delete n.montoMensual;
          }
          if (n.montoMensual) {
            if (n.montoMensual.moneda === null) {
              n.montoMensual.moneda = "MXN";
            }
          }
          if (n.ubicacion) {
            if (n.ubicacion.pais === null) {
              n.ubicacion.pais = "MX";
            }
          }
          if (n.porcentajeParticipacion === 0) {
            n.porcentajeParticipacion = 1;
          }
        }
      }
    }
    return n;
  })
  return participacion;
}

function tomaDeciciones(tomaDecision) {
  tomaDecision.forEach((n) => {
    if (n.tipoRelacion) {
      if (n.tipoRelacion != "DECLARANTE") {
        delete n.tipoRelacion;
        delete n.tipoInstitucion;
        delete n.nombreInstitucion;
        delete n.rfc;
        delete n.puestoRol;
        delete n.fechaInicioParticipacion;
        delete n.recibeRemuneracion;
        delete n.montoMensual;
        delete n.ubicacion;
      }
      else {
        n.fechaInicioParticipacion = convertirFechaCorta(n.fechaInicioParticipacion);
        if (n.tipoRelacion === "DECLARANTE") {
          if (n.tipoOperacion === null) {
            n.tipoOperacion = "AGREGAR";
          }
          if (n.recibeRemuneracion === false) {
            delete n.montoMensual;
          }
          if (n.montoMensual) {
            if (n.montoMensual.moneda === null) {
              n.montoMensual.moneda = "MXN";
            }
          }
          if (n.ubicacion) {
            if (n.ubicacion.pais === null) {
              n.ubicacion.pais = "MX";
            }
          }
        }
      }
    }
    return n;
  });
  return tomaDecision;
}

function apoyos(apoyo) {
  apoyo.forEach((n) => {
    if (n.benefiarioPrograma) {
      if (n.benefiarioPrograma.clave === "DC") {
        delete n.tipoPersona;
        delete n.benefiarioPrograma;
        delete n.nombrePrograma;
        delete n.institucionOtorgante;
        delete n.nivelOrdenGobierno;
        delete n.tipoApoyo;
        delete n.formaRecepcion;
        delete n.montoApoyoMensual;
        delete n.especifiqueApoyo;
      }
      else {
        if (n.benefiarioPrograma.clave != "DC") {
          if (n.montoApoyoMensual) {
            if (n.montoApoyoMensual.moneda === null) {
              n.montoApoyoMensual.moneda = 'MXN';
            }
          }
        }
      }
    }
    return n;
  });
  return apoyo;
}

function representaciones(representacion) {
  representacion.forEach((n) => {
    n.fechaInicioRepresentacion = convertirFechaCorta(n.fechaInicioRepresentacion);
    if (n.tipoRelacion) {
      if (n.tipoRelacion != "DECLARANTE") {
        delete n.tipoOperacion;
        delete n.tipoRelacion;
        delete n.tipoRepresentacion;
        delete n.tipoPersona;
        delete n.nombreRazonSocial;
        delete n.rfc;
        delete n.recibeRemuneracion;
        delete n.montoMensual;
        delete n.fechaInicioRepresentacion;
        delete n.ubicacion;
        delete n.sector;
      }
      else {
        if (n.tipoRelacion === "DECLARANTE") {
          if (n.tipoOperacion === null) {
            n.tipoOperacion = "AGREGAR";
          }
          if (n.recibeRemuneracion === false) {
            if (n.montoMensual === null) {
              delete n.montoMensual;
            }
          }
          if (n.montoMensual) {
            if (n.montoMensual.moneda === null) {
              n.montoMensual.moneda = "MXN"
            }
          }
          if (n.ubicacion) {
            if (n.ubicacion.pais === null) {
              n.ubicacion.pais = "MX";
            }
          }
          if (n.rfc === null) {
            n.rfc = "";
          }
        }
      }
    }
    return n;
  });
  return representacion;
}

function clientesPrincipales(cliente) {
  cliente.forEach((n) => {
    if (n.tipoRelacion) {
      if (n.tipoRelacion != "DECLARANTE") {
        delete n.realizaActividadLucrativa;
        delete n.tipoRelacion;
        delete n.empresa;
        delete n.clientePrincipal;
        delete n.sector;
        delete n.montoAproximadoGanancia;
        delete n.ubicacion;
      }
      else {
        if (n.tipoRelacion === "DECLARANTE") {
          if (n.empresa.rfc === null) {
            n.empresa.rfc = "";
          }
          if (n.ubicacion) {
            if (n.ubicacion.pais === null) {
              n.ubicacion.pais = "MX";
            }
            if (n.ubicacion.entidadFederativa === null) {
              n.ubicacion.entidadFederativa = "";
            }
            if (n.ubicacion.pais !== 'MX') {
              delete n.ubicacion.entidadFederativa;
            }
          }
          if (n.clientePrincipal === null) {
            n.clientePrincipal = "";
          }
          if (n.montoAproximadoGanancia.moneda === null) {
            n.montoAproximadoGanancia.moneda = "MXN";
          }
        }
      }
    }
    return n;
  });
  return cliente;
}

function beneficiosPrivados(beneficio) {
  beneficio.forEach((n) => {
    if (n.beneficiario) {
      if (n.beneficiario[0].clave != "DC") {
        delete n.tipoOperacion;
        delete n.beneficiario;
        delete n.otorgante;
        delete n.formaRecepcion;
        delete n.montoMensualAproximado;
        delete n.sector;
      }
      else {
        if (n.beneficiario[0].clave === "DC") {
          if (n.otorgante) {
            if (n.otorgante.tipoPersona === null) {
              delete n.otorgante;
            }
            else {
              if (n.otorgante.nombreRazonSocial === null) {
                n.otorgante.nombreRazonSocial = "";
              }
              if (n.otorgante.rfc === null) {
                n.otorgante.rfc = "";
              }
            }
          }
          if (n.montoMensualAproximado) {
            if (n.montoMensualAproximado.moneda === null) {
              n.montoMensualAproximado.moneda = "MXN";
            }
          }
        }
      }
    }
    return n;
  });
  return beneficio;
}

function fideicomisos(fideicomiso) {
  fideicomiso.forEach((n) => {
    if (n.tipoRelacion) {
      if (n.tipoRelacion != "DECLARANTE") {
        delete n.tipoOperacion;
        delete n.tipoRelacion;
        delete n.tipoFideicomiso;
        delete n.tipoParticipacion;
        delete n.rfcFideicomiso;
        delete n.sector;
        delete n.extranjero;
        delete n.fideicomitente;
        delete n.fiduciario;
        delete n.fideicomisario;
      }
      else {
        if (n.tipoRelacion === "DECLARANTE") {
          if (n.rfcFideicomiso === null) {
            n.rfcFideicomiso = "";
          }
          if (n.fideicomitente.rfc === null) {
            n.fideicomitente.rfc = "";
          }
          if (n.extranjero === null) {
            n.extranjero = "MX";
          }
          if (n.fideicomitente === null) {
            n.fideicomitente = "";
          }
          if (n.fiduciario === null) {
            n.fiduciario = "";
          }
          if (n.fideicomisario === null) {
            n.fideicomisario = "";
          }
        }
      }
    }
    return n;
  });
  return fideicomiso;
}

module.exports = {
  convertirFechaLarga,
  datosGenerales,
  datosCurricularesDeclarante,
  datosEmpleoCargoComision,
  //domicilioDeclarante,
  experienciaLaboral,
  ingresos,
  actividadAnualAnterior,
  datosPareja,
  //datosDependientesEconomicos,
  bienesInmuebles,
  vehiculos,
  bienesMuebles,
  adeudosPasivos,
  inversionesCuentasValores,
  prestamoComodato,
  participacion,
  tomaDeciciones,
  apoyos,
  representaciones,
  clientesPrincipales,
  beneficiosPrivados,
  fideicomisos
};