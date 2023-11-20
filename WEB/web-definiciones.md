# definiciones

Multimedia : Es un término que procede de la lengua inglesa y que refiere a aquello que utiliza varios medios de manera simultánea en la transmisión de una información.-etimologia : Viene del ingles multimedia y este del latín multi- (muchos) y medium (medio en sentido de intrumento, medio de comunicación) mas el sufijo -ia que indica cualidad.

Maquina: Et; Del latin machina y este del griego μαχανά machaná. Medio, elemento o remedio. Sustantivo femenino. Elemento que utiliza energia para obtener un objetivo determinado.

Cookies
//defs

blog : comparativas vpns https://thatoneprivacysite.net/

-> Para crear un servidor casero con una ip dinamica, necesitamos un servicio llamado
DDNS que permite asociar nuestra IP dinámica a un nombre de dominio de manera que ,
cuando cambie la IP, este servicio auto ajusta el enlace del dominio a la IP cambiante.

ISP: Internet Service Protocol

Mejores DDNS 2019: No-IP , DuckDNS , Dynu , DNS-O-Matic

VPN : Virtual Private Network , Red Privada Virtual

VPS : Virtual Private Server , Servidor Virtual Privado

DNS : Domain Name Service , Servicio de Nombre de Dominio ,
	
		Es un servicio que nos traduce una IP númerica del servidor a una URL más facil de recordar, para podernos conectar a dicho servidor.

OAuth : ?

Catgorias / conexiones,aplicaciones,redes,internet,web

API : Application programming interface, Interfaz de programación de aplicaciones

Se trata de un conjunto de definiciones y protocolos que se utiliza para desarrollar e integrar el software de las aplicaciones, permitiendo la comunicación entre dos aplicaciones de software a través de un conjunto de reglas. (xataca )

Conjunto de procedimientos y funciones que ofrece cierta biblioteca para ser utilizado por otro
software como una capa de abstracción . (from wikipedia)

Las API permiten que sus productos y servicios se comuniquen con otros, sin necesidad de saber
cómo estan implenmentados.
A veces, las API se consideran como contratos, con documentación que representa un acuerdo entre las partes: si una de las partes envía una solicitud remota con cierta estructura en particular, esa misma estructura determinará cómo responderá el software de la otra parte.
Las API web normalmente usan HTTP para solicitar mensajes y proporcionar una definición de la estructura de los mensajes de respuesta. Por lo general, estos mensajes de respuesta toman la forma de un archivo XML o JSON
Al inicio se desarrolló una especificación de protocolo para permitir la estandarización del intercambio de información; se llama Protocolo de Acceso a Objetos Simples, más conocido como SOAP. Las API diseñadas con SOAP usan XML para el formato de sus mensajes y reciben solicitudes a través de HTTP o SMTP. 

Otra especificación es la Transferencia de Estado Representacional (REST). Las API web que funcionan con las limitaciones de arquitectura REST se llaman API de RESTful. La diferencia entre REST y SOAP es básica: SOAP es un protocolo, mientras que REST es un estilo de arquitectura. Esto significa que no hay ningún estándar oficial para las API web de RESTful. Tal como se define en la tesis de Roy Fielding, “Architectural Styles and the Design of Network-based Software Architectures” [https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm], las API son RESTful siempre que cumplan con las 6 limitaciones principales de un sistema RESTful:
 
    Arquitectura cliente-servidor: la arquitectura REST está compuesta por clientes, servidores y recursos, y administra las solicitudes con HTTP.

    Sin estado: el contenido de los clientes no se almacena en el servidor entre las solicitudes, sino que la información sobre el estado de la sesión se queda en el cliente. En su lugar, la información sobre el estado de la sesión está en posesión del cliente.

    Capacidad de caché: el almacenamiento en caché puede eliminar la necesidad de algunas interacciones cliente-servidor.

    Sistema en capas: las interacciones cliente-servidor pueden estar mediadas por capas adicionales, que pueden ofrecer otras funciones, como el equilibrio de carga, los cachés compartidos o la seguridad. Estas capas pueden ofrecer funcionalidades adicionales, como equilibrio de carga, cachés compartidos o seguridad.

    Código de demanda (opcional): los servidores pueden extender las funciones de un cliente transfiriendo código ejecutable.

    Interfaz uniforme: esta limitación es fundamental para el diseño de las API de RESTful e incluye 4 aspectos:

        Identificación de recursos en las solicitudes: los recursos se identifican en las solicitudes y se separan de las representaciones que se devuelven al cliente.

        Administración de recursos mediante representaciones: los clientes reciben archivos que representan los recursos. Estas representaciones deben tener la información suficiente como para poder ser modificadas o eliminadas.

        Mensajes autodescriptivos: cada mensaje que se devuelve al cliente contiene la información suficiente para describir cómo debe procesar la información.

        Hipermedios es el motor del estado de la aplicación: después de acceder a un recurso, el cliente REST debe ser capaz de descubrir mediante hipervínculos todas las otras acciones que están disponibles actualmente.

 En los últimos años, la especificación de OpenAPI se ha convertido en un estándar común para definir las API de REST. OpenAPI [https://www.openapis.org] establece una forma independiente del lenguaje para que los desarrolladores diseñen interfaces API de REST, que permite a los usuarios entenderlas con el mínimo esfuerzo.


 (from red hat)


SEGURIDAD 
REST Security Cheat Sheet 
[https://owasp.org/www-project-cheat-sheets/cheatsheets/REST_Security_Cheat_Sheet.html
]


OpenAPI 


SOA frente a la arquitectura de microservicios

Los dos enfoques de arquitectura que más se utilizan para las API remotas son la arquitectura orientada al servicio (SOA) y la arquitectura de microservicios. La SOA es el más antiguo de los dos, y comenzó como una mejora de las aplicaciones monolíticas. En lugar de usar una sola aplicación que haga todo, se pueden usar varias aplicaciones que proporcionen diferentes funciones y que no tengan conexión directa, todo gracias a un patrón de integración, como un bus de servicios empresariales (ESB).

Aunque en muchos aspectos la SOA es más sencilla que una arquitectura monolítica, conlleva un riesgo de cambios en cascada en todo el entorno si las interacciones de los componentes no se comprenden claramente. Esta complejidad adicional vuelve a presentar algunos de los problemas que la SOA pretendía solucionar.

Las arquitecturas de microservicios se parecen a los patrones SOA en que los servicios son especializados y no tienen conexión directa. Pero además, descomponen las arquitecturas tradicionales en partes más pequeñas. Los servicios de la arquitectura de microservicios usan un marco de mensajería común, como las API de RESTful. Utilizan API de RESTful para comunicarse entre sí, sin necesidad de operaciones complejas de conversión de datos ni capas de integración adicionales. Usar las API de RESTful permite e incluso fomenta una distribución más rápida de nuevas funciones y actualizaciones. Cada servicio es independiente. Un servicio se puede reemplazar, mejorar o abandonar, sin afectar los demás servicios de la arquitectura. Esta arquitectura liviana optimiza los recursos distribuidos o en la nube y admite la escalabilidad dinámica de los servicios individuales.



#Microservices

La arquitectura de microservicios es una aproximación para el desarrollo de software que consiste en construir una aplicación como un conjunto de pequeños servicios, los cuales se ejecutan en su propio proceso y se comunican con mecanismos ligeros. 

los microservicios son esencialmente servicios de software independientes que proporcionan una funcionalidad concreta de tu modelo de negocio. 

los microservicios están basados en la arquitectura orientada a servicios (SOA). Este modelo nos permite que las aplicaciones se comuniquen entre sí dentro de la misma o desde diferentes máquinas, no importa el lugar ni el lenguaje de programación, mientras se puedan comunicar en un mismo idioma, por ejemplo mediante un API REST con JSON.



#Websocket

WebSocket es una tecnología que proporciona un canal de comunicación bidireccional y full-duplex sobre un único socket TCP. Está diseñada para ser implementada en navegadores y servidores web, pero puede utilizarse por cualquier aplicación cliente/servidor. La API de WebSocket está siendo normalizada por el W3C, mientras que el protocolo WebSocket ya fue normalizado por la IETF como el RFC 6455. Debido a que las conexiones TCP comunes sobre puertos diferentes al 80 son habitualmente bloqueadas por los administradores de redes, el uso de esta tecnología proporcionaría una solución a este tipo de limitaciones proveyendo una funcionalidad similar a la apertura de varias conexiones en distintos puertos, pero multiplexando diferentes servicios WebSocket sobre un único puerto TCP (a costa de una pequeña sobrecarga del protocolo). 

(from wikipedia)

   The WebSocket Protocol [https://tools.ietf.org/html/rfc6455]


diferencias entre Websocket y REST
PRotocolos:

HTTP

WEBSOCKET

REST : Representational State Transfer , es un patrón o estilo de diseño de arquitectura.

Con WebSockets envías al servidor mensajes de cadenas simple con datos, y el servidor procesa los datos y las respuestas. La comunicación es más eficiente que HTTP si nos centramos en el tamaño del mensaje, y en la velocidad, especialmente para mensajes de gran tamaño, ya que en HTTP, por ejemplo, tienes que enviar los headers en cada petición. Esto suma bytes. Además en REST, tienes los recursos en URLs y métodos de HTTP. Lo que significa que para cada petición, obtienes una respuesta.

Puede ser buena idea observar los benchmarkings realizados por David Luecke para comparar el rendimiento de HTTP vs WebSockets. Verás que para más de 50 peticiones concurrentes, ¡Websockets pueden ser el 50% más rápidos que HTTP! 

Otra de las diferencias más importantes para mí entre los dos, es que que WebSockets son protocolos stateful, mientras las conexiones HTTP son stateless. Esto quiere decir que WebSockets crean una conexión que se mantiene viva en el servidor hasta que el socket se cierre y se intercambian los mensajes de forma bidireccional. Mientras que en las conexiones HTTP, en que una petición significa una respuesta - válida o no -, el acceso desde diferentes servidores no interrumpe su funcionamiento, lo que desde mi punto de vista es ideal, por ejemplo para microservicios. Pues, cualquier servidor puede gestionar cualquier petición y no es necesario sincronizar cualquiera de los estados compartidos, excepto la base de datos.

https://coconauts.net/blog/2017/11/20/websocket-vs-rest/


#MQTT

MQTT is a machine-to-machine (M2M)/"Internet of Things" connectivity protocol. It was designed as an extremely lightweight publish/subscribe messaging transport. It is useful for connections with remote locations where a small code footprint is required and/or network bandwidth is at a premium.

MQTT v5.0 is an OASIS Standard.

## OTHER IOT PROTOCOLS

DDS – Data Distribution Service
AMQP – Advanced Message Queuing Protocol
CoAP – Constrained Application Protocol


#DAT protocol

https://dat.foundation/
https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html

















