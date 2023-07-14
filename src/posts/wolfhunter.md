Queries globales 
(Se usan en este y en otros modulos)

Función:  obtener_permisos()

Descripción:
Función que obtiene los permisos de acceso para los distintos usuarios.

Parámetros:
$conID        =>  Id del concesionario
$opeID        =>  Id del operador del Concesionario
$modID        =>  Opcional. Identificador del modulo para ingresar
$perFlag      =>  Opcional. Define el tipo de retorno de la función Si está en 1 devuelve un booleano indicando si tiene o no permisos. Sino directamente redirige la página.

Query:
SELECT C.opeEstado, B.modID, B.perTipo 
  FROM trg.trgModulos A, trg.trgPermisosOperadores B, trg.trgOperadoresConcesionarios C 
    WHERE A.modID = B.modID 
    AND A.modEstado = 'A' 
    AND B.conID = '$conID'
    AND B.opeID = '$opeID' 
    AND B.conID = C.conID AND B.opeID = C.opeID
    
    AND A.modID = '$modID' AND B.perTipo = 'S' # --> (Si '$modID' esta definido)



Función:  getZonas()

Descripción:
Devuelve datos de las Provincias.

Parámetros:
$zonID_A    =>  Id de provincia Autos
$zonID_M    =>  Id de provincia Motos
$zonEstado  =>  Identificador de Estado
$order      =>  Campo por los que se debe ordenar la consulta. Default = "zonID_A"

Query:
SELECT * FROM sugit.sugZonas WHERE 1
  AND zonID_A IN ('$zonID_A') # --> (Si '$zonID_A' esta definido)
  AND zonID_M IN ('$zonID_M') # --> (Si '$zonID_M' esta definido)
  AND zonEstado IN ('$zonEstado') # --> (Si '$zonEstado' esta definido)
  ORDER BY '$order' # --> (Si $order esta definido)



Función:  getTiposOperadores()

Descripción:
Funcion que devuelve los tipos de usuarios.

Parámetros:
$tpeID    =>  Id de provincia Autos
$tpeEstado    =>  Id de provincia Motos
$order      =>  Campo por los que se debe ordenar la consulta. Default = "tpeID"

Query:
SELECT * FROM trg.trgTipoOperadores WHERE 1
  AND tpeID IN ('$tpeID') # --> (Si '$tpeID' esta definido)
  AND tpeEstado IN ('$tpeEstado') # --> (Si '$tpeEstado' esta definido)
  ORDER BY '$order' # --> (Si $order esta definido)





Función:  obtener_operadores()

Descripción:
Funcion que obtiene informacion sobre el operador.

Parámetros:
$conID         =>  Id del Concesionario
$opeID         =>  Id del operador del Concesionario
$conEstado     =>  Identifica el estado actual del Concesionario (A => activo, T => temporal)
$opeEstado     =>  Identifica el estado actual del operador del Concesionario

Query:
SELECT A.*, B.conRazonSocial, B.conEstado, B.conCH, B.conDomicilio, B.conLocalidad, B.conTelefono, B.conEmail, C.tpeDescrip
  FROM trg.trgOperadoresConcesionarios A, trg.trgConcesionarios B,  trg.trgTipoOperadores C
    WHERE A.tpeID = C.tpeID 
    AND A.conID = B.conID 
    AND B.conID = '$conID'

    AND A.opeID = '$opeID' # --> (Si $opeID esta definido)
    AND B.conEstado IN ('".$conEstado."') # --> (Si $conEstado esta definido)
    AND B.opeEstado IN ('".$opeEstado."') # --> (Si $opeEstado esta definido)
    AND A.tpeID = '$tpeID' # --> (Si $tpeID esta definido)
  



Función:  obtener_operadores_logueo()

Descripción:
Funcion que obtiene los operadores, sus estados y la cantidad de intentos de logueo.

Parámetros:
$conID         =>  Id del Concesionario
$opeID         =>  Id del operador del Concesionario
$opePassword   =>  Password del operador del Concesionario
$conEstado     =>  Identifica el estado actual del Concesionario (A => activo, T => temporal)
$opeEstado     =>  Identifica el estado actual del operador del Concesionario

Query:
SELECT A.*, B.conRazonSocial, C.opeEstado AS opeEstado_sv, D.conEstado AS conEstado_sv, TIPO.tpeDescrip
  FROM  trg.trgConcesionarios B, trg.trgOperadoresConcesionarios A
    LEFT JOIN  suvev.suvOperadoresConcesionarios C ON (A.opeID = C.opeID AND A.conID = C.conID)
    LEFT JOIN suvev.suvConcesionarios D ON A.conID = D.conID
    INNER JOIN trg.trgTipoOperadores TIPO ON TIPO.tpeID = A.tpeID
    WHERE A.conID = B.conID 
    AND A.conID = '$conID' 
    AND A.opeID = '$opeID'
    AND CASE WHEN B.conTip = 'F' 
    THEN A.conID = A.conID_R OR A.conID_R = '$_COOKIE["cookie"]["conID_R"]' 
    ELSE 1 END

    AND B.conEstado IN ('$conEstado') # --> (Si $conEstado esta definido)
    AND B.cchEstado IN ('$cchEstado') # --> (Si $cchEstado esta definido)
    AND B.opeEstado IN ('$opeEstado') # --> (Si $opeEstado esta definido)
    AND A.opePassword = MD5('".mysql_real_escape_string($opePassword)."') # --> (Si $opePassword esta definido)
    GROUP BY conID, conID_R
    LIMIT 1





(getModulos())
(getConcesionarios())


Queries para Insertar Operadores

Función:  putOperadoresConcesionarios()

Descripción:
Funcion que ingresa los operadores de concesionarios.

Parámetros:
$conID   =>  Id del concesionario
$opeID   =>  Id del operador del Concesionario
$d       =>  Array - Datos del Operador para realizar la modificacion
$p       =>  Array - Permisos

Queries:
# (Si $d[tpeID] es menor a 4, valida si el tipo de operador ya existe)
SELECT COUNT(*) AS C FROM trg.trgOperadoresConcesionarios 
  WHERE opeID = '$d[opeID]' 
  AND tpeID = '$d[tpeID]' 
  AND opeEstado IN ('A','I') 
  AND conID = '$conID'

# (Valida si faltan parametros en la configuracion)
SELECT parContent AS opeID_R FROM trg.trgParametrizacion WHERE parID = 'ADP_OPERADOR_DEF'

# (Inserta operador)
INSERT INTO trg.trgOperadoresConcesionarios 
  VALUES ('$d[conID]', '$d[opeID]', '$d[conID]', '$d[opeEstado]', '$d[tpeID]', '$d[opeNombre]', '$d[opeApellido]', '$d[opeSexo]', '$d[opeCelular]', 
  '$d[opeEmail]', '$d[opeDireccion]', '$d[opeLocalidad]', '$d[zonID]', MD5('$d[opePassword]'), 0, NULL, NULL, NOW(), 'N', 'N', '$d[opeIP]', 0, '0000-00-00 00:00:00', 
  NOW(), '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '$res_p->field(opeID_R)')

# (Asigna los permisos del operador del comerciante habitualista)
UPDATE trg.trgPermisosOperadores SET perTipo = '$perTipo' 
  WHERE conID = '$d[conID]' 
  AND opeID = '$d[opeID]' 
  AND modID = '$modID'

(get_concesionarios_fabricas())



Queries del Panel de Control

Función:  obtenerOperadoresConcesionariosByIdcon()

Descripción:
Funcion que obtiene los Operadores segun el concecionario que haya sido elegido.

Parámetros:
$parametro   =>  Parametro para la query

Query:
SELECT * FROM trgOperadoresConcesionarios WHERE conID = '$parametro'








