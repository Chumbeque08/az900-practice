 const QUESTIONS = [

  {
  id: 1,
  category: "Cloud Concepts",
  type: "multiple",

  question_es: `
<div class="question-note">
Selecciona las cuatro opciones correctas.
</div>

Tu empresa planea suscribirse a un plan de soporte de Azure. El plan debe permitir abrir nuevas solicitudes de soporte técnico. ¿Cuáles de los siguientes planes de soporte permiten esto?
`,
  options_es: [
    "Basic",
    "Developer",
    "Standard",
    "Professional Direct",
    "Premier"
  ],
  correct: [1, 2, 3, 4],
  explanation_es: "El plan Basic solo incluye facturación, documentación y soporte comunitario, pero no permite abrir incidencias técnicas. Los planes Developer, Standard, Professional Direct y Premier sí permiten crear solicitudes de soporte técnico."
},

{
  id: 2, // cambia si ya existe
  category: "Azure Storage",
  type: "single",
  question_es: "Tu empresa tiene centros de datos en Los Ángeles y Nueva York. La empresa tiene una suscripción de Microsoft Azure. Estás configurando ambos centros de datos como sitios geoclustering para resiliencia. Necesitas recomendar una opción de redundancia de Azure Storage. Los requisitos son: los datos deben almacenarse en múltiples nodos, en ubicaciones geográficas separadas y deben poder leerse tanto desde la ubicación primaria como desde la secundaria. ¿Qué opción de redundancia deberías recomendar?",
  question_en: "Your company has datacenters in Los Angeles and New York. The company has a Microsoft Azure subscription. You are configuring the two datacenters as geo-clustered sites for site resiliency. You need to recommend an Azure storage redundancy option.",
  options_es: [
    "Almacenamiento con redundancia geográfica (GRS)",
    "Almacenamiento georredundante de acceso de lectura (RA-GRS)",
    "Almacenamiento con redundancia de zona (ZRS)",
    "Almacenamiento con redundancia local (LRS)"
  ],
  correct: [1],
  explanation_es: "RA-GRS replica los datos a una región secundaria y además permite acceso de lectura desde esa ubicación secundaria. GRS replica entre regiones, pero no permite lectura desde la secundaria. ZRS replica entre zonas de disponibilidad y LRS solo dentro del mismo centro de datos."
},


{
  id: 3,
  category: "Azure Support",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie con la misma configuración inicial, pero cada pregunta tiene un resultado distinto.
</div>

La suscripción Azure de tu empresa incluye un plan de soporte Basic.

La empresa desea solicitar una evaluación del diseño de un entorno Azure realizada por Microsoft. Esta funcionalidad no está soportada por el plan actual.

Deseas asegurar que la empresa contrate un plan que permita esta funcionalidad minimizando costos.

Solución propuesta:
Recomendar el plan Professional Direct.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `
Professional Direct proporciona orientación y soporte proactivo, pero la evaluación formal del diseño del entorno y el soporte arquitectónico específico del cliente requieren niveles superiores como Premier (o equivalentes empresariales). Por ello, la solución propuesta no cumple el objetivo.
`
},

{
  id: 4, // ajustar según corresponda
  category: "Cloud Concepts",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie con la misma configuración inicial, pero cada pregunta tiene un resultado distinto.
</div>

Debes implementar máquinas virtuales Azure para tu empresa.

Necesitas utilizar el modelo de implementación cloud apropiado.

Solución propuesta:
Utilizar Software as a Service (SaaS).

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `
Las máquinas virtuales Azure pertenecen al modelo IaaS (Infrastructure as a Service), ya que el cliente administra el sistema operativo, configuración y aplicaciones. SaaS proporciona aplicaciones listas para usar y no permite administrar máquinas virtuales.
`
},

{
  id: 5, // ajustar según corresponda
  category: "Cloud Concepts",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie con la misma configuración inicial, pero cada pregunta tiene un resultado distinto.
</div>

Debes implementar máquinas virtuales Azure para tu empresa.

Necesitas utilizar el modelo de implementación cloud apropiado.

Solución propuesta:
Utilizar Platform as a Service (PaaS).

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `
PaaS proporciona una plataforma administrada para desarrollar y ejecutar aplicaciones, pero no permite administrar máquinas virtuales directamente. Para desplegar Azure Virtual Machines debe utilizarse IaaS.
`
},

{
  id: 6, // ajustar según corresponda
  category: "Cloud Concepts",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie con la misma configuración inicial, pero cada pregunta tiene un resultado distinto.
</div>

Debes implementar máquinas virtuales Azure para tu empresa.

Necesitas utilizar el modelo de implementación cloud apropiado.

Solución propuesta:
Utilizar Infrastructure as a Service (IaaS).

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [0],

  explanation_es: `
IaaS es el modelo adecuado para Azure Virtual Machines. Permite aprovisionar y administrar infraestructura como máquinas virtuales, redes y almacenamiento mientras el cliente administra el sistema operativo y las aplicaciones.
`
},

{
  id: 7,
  category: "Azure App Service",
  type: "single",

  question_es: `
<p>Tus desarrolladores han creado 10 aplicaciones web que deben hospedarse en Azure.</p>

<p>Debes determinar qué plan de Azure App Service utilizar.</p>

<p>El plan debe cumplir los siguientes requisitos:</p>

<ul>
  <li>Las aplicaciones usarán dominios personalizados.</li>
  <li>Cada aplicación requiere 10 GB de almacenamiento.</li>
  <li>Cada aplicación debe ejecutarse en instancias dedicadas.</li>
  <li>Debe incluirse balanceo de carga entre instancias.</li>
  <li>Los costos deben minimizarse.</li>
</ul>

<p>¿Qué plan web debes utilizar?</p>
`,

  options_es: [
    "Standard",
    "Basic",
    "Free",
    "Shared"
  ],

  correct: [1],

  explanation_es: `
Basic ofrece únicamente 10 GB de almacenamiento total, insuficiente para 10 aplicaciones que requieren 10 GB cada una. Standard proporciona más capacidad y cumple todos los requisitos.
`
},

{
  id: 8, // ajustar según corresponda
  category: "Azure Governance",
  type: "single",

  question_es: `

<div class="question-note">
Nota: Esta pregunta forma parte de una serie con la misma configuración inicial, pero cada pregunta tiene un resultado distinto.
</div>

Planeas migrar una empresa a Azure. Cada una de las numerosas divisiones de la empresa tendrá un administrador encargado de gestionar los recursos Azure utilizados por su respectiva división.

Deseas asegurarte de que la implementación Azure permita segmentar los recursos por divisiones, manteniendo al mínimo el esfuerzo administrativo.

Solución propuesta:
Utilizar varios directorios de Azure Active Directory (Azure AD).

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `
Utilizar múltiples directorios de Azure AD incrementa la complejidad administrativa. Para segmentar recursos entre divisiones manteniendo una administración centralizada, es preferible utilizar un único tenant Azure AD junto con subscriptions, resource groups y RBAC.
`
},

{
  id: 9, // ajustar según corresponda
  category: "Azure App Service",
  type: "single",

  question_es: `
Tus desarrolladores han creado una aplicación web para usuarios de la oficina de Miami. La aplicación será pública y permitirá consultar información de clientes y productos. Actualmente se ejecuta en un entorno local.

Planeas hospedar la aplicación en Azure.

Debes determinar qué plan de Azure App Service utilizar. El plan debe cumplir los siguientes requisitos:

<ul>
<li>El sitio utilizará la URL miami.weyland.com.</li>
<li>El sitio se desplegará en dos instancias.</li>
<li>Debe incluir soporte SSL.</li>
<li>El sitio requiere 12 GB de almacenamiento.</li>
<li>Los costos deben minimizarse.</li>
</ul>

¿Qué plan web debes utilizar?
`,

  options_es: [
    "Standard",
    "Basic",
    "Free",
    "Shared"
  ],

  correct: [0],

  explanation_es: `
Standard es el nivel mínimo que cumple todos los requisitos. Basic soporta dominios personalizados y SSL, pero solo ofrece 10 GB de almacenamiento y no soporta escalado a múltiples instancias. Free y Shared no soportan dominios personalizados ni SSL.
`
},

{
  id: 10,
  category: "Azure Cost Management",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

Tu empresa planea migrar todas sus máquinas virtuales a una suscripción de Azure de pago por uso (pay-as-you-go). Las máquinas virtuales actualmente están alojadas en hosts Hyper-V en un centro de datos.

Debes asegurarte de que la solución de Azure utilice el modelo de gasto correcto.

Solución: Recomiendas utilizar el modelo de gasto elástico.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `
El término "modelo de gasto elástico" mencionado en la solución no se reconoce dentro de los marcos de gestión financiera de Azure. Azure reconoce principalmente dos modelos de gasto: Pago por uso e Instancias reservadas. El modelo Pago por uso permite costos flexibles basados ​​en el uso real, que parece ser el modelo previsto para la migración de su empresa a Azure. Este modelo de gestión de costos en tiempo real se ajusta bien al cambio operativo de gastos de capital (CapEx) en centros de datos tradicionales a gastos operativos (OpEx) en entornos de nube. Por lo tanto, el "modelo de gasto elástico" propuesto no aborda correctamente el requisito, lo que hace que la solución sea incorrecta.
`
},

{
  id: 11,
  category: "Azure Cost Management",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

Tu empresa planea migrar todas sus máquinas virtuales a una suscripción de Azure de pago por uso (pay-as-you-go). Las máquinas virtuales actualmente están alojadas en hosts Hyper-V en un centro de datos.

Debes asegurarte de que la solución de Azure utilice el modelo de gasto correcto.

Solución: Recomiendas utilizar el modelo de gasto escalable.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `
Al hablar de los modelos de pago de Azure, en particular de un plan de pago por uso, este se clasifica como Gasto Operativo (OpEx), no como un modelo de gasto escalable. El OpEx se alinea con los costos recurrentes, como los servicios en la nube, donde se paga por los recursos informáticos a medida que se consumen. Esta clasificación ayuda a las empresas a gestionar sus finanzas evitando grandes gastos de capital iniciales (CapEx) y, en su lugar, pagando de forma incremental. Por eso, el modelo de gasto escalable especificado en la solución no cumple con los requisitos de un servicio de pago por uso.
`
},

{
  id: 12,
  category: "Azure Cost Management",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

Tu empresa planea migrar todas sus máquinas virtuales a una suscripción de Azure de pago por uso (pay-as-you-go). Las máquinas virtuales actualmente están alojadas en hosts Hyper-V en un centro de datos.

Debes asegurarte de que la solución de Azure utilice el modelo de gasto correcto.

Solución: Recomiendas utilizar el modelo de gasto operativo (OpEx).

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [0],

  explanation_es: `
El modelo de gasto operativo (OpEx) se alinea correctamente con una suscripción Azure pay-as-you-go. En un modelo OpEx, los costos se pagan según el uso real de los recursos, en lugar de realizar grandes inversiones iniciales (CapEx). Esto encaja perfectamente con el modelo de consumo utilizado por Azure.
`
},

{
  id: 13,
  category: "Azure AI Services",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

Debes implementar una solución de Inteligencia Artificial (IA) en Azure.

Quieres asegurarte de poder crear, probar e implementar análisis predictivos para la solución.

Solución: Recomiendas utilizar Azure Cosmos DB.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `
Azure Cosmos DB es un servicio de base de datos NoSQL y no está diseñado para crear, probar e implementar modelos de análisis predictivo. Para este tipo de escenarios, Azure Machine Learning es la solución adecuada, ya que proporciona herramientas y entornos especializados para desarrollar e implementar modelos de inteligencia artificial y machine learning.
`
},

{
  id: 14,
  category: "Azure Active Directory",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

El bosque de Active Directory de tu empresa incluye miles de cuentas de usuario.

Se te ha informado que todos los recursos de red serán migrados a Azure. Después de la migración, el centro de datos local será retirado.

Debes implementar una estrategia que reduzca el impacto para los usuarios una vez completada la migración.

Solución: Planeas sincronizar todas las cuentas de usuario de Active Directory con Azure Active Directory (Azure AD).

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [0],

  explanation_es: `
Sincronizar las cuentas de Active Directory con Azure AD mediante herramientas como Azure AD Connect minimiza el impacto para los usuarios durante la migración a la nube. Esto permite que los usuarios continúen utilizando sus credenciales existentes para acceder a los recursos de Azure, reduciendo interrupciones y facilitando la transición.
`
},

{
  id: 15,
  category: "Azure AI Services",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

Debes implementar una solución de Inteligencia Artificial (IA) en Azure.

Quieres asegurarte de poder crear, probar e implementar análisis predictivos para la solución.

Solución: Recomiendas utilizar Azure Machine Learning Studio.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [0],

  explanation_es: `
El uso propuesto de Azure Machine Learning Studio cumple con los requisitos. Esta herramienta facilita la creación, las pruebas y la implementación de soluciones de análisis predictivo en Azure. Azure Machine Learning Studio ofrece una interfaz intuitiva de arrastrar y soltar, así como sólidas capacidades de aprendizaje automático que permiten gestionar de forma eficiente el ciclo de vida del desarrollo de modelos de aprendizaje automático, desde la creación y las pruebas hasta la implementación. Esto garantiza un proceso optimizado para los flujos de trabajo de análisis predictivo, esenciales para cualquier solución de IA que se desarrolle en Azure.
`
},

{
  id: 16,
  category: "Azure Resource Manager",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

La infraestructura de tu empresa incluye varias unidades de negocio que necesitan una gran cantidad de recursos de Azure para sus operaciones diarias.

Los recursos requeridos por cada unidad de negocio son idénticos.

Debes implementar una estrategia para crear recursos de Azure automáticamente.

Solución: Recomiendas incluir el servicio Azure API Management en la estrategia.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `
La solución propuesta utilizando Azure API Management no cumple el requisito de automatizar la creación de recursos de Azure. Azure API Management está diseñado principalmente para crear, administrar y publicar APIs, no para automatizar implementaciones de recursos.

Para automatizar el despliegue de recursos en distintas unidades de negocio, se deberían utilizar plantillas de Azure Resource Manager (ARM). Las plantillas ARM permiten implementar infraestructura como código, facilitando la creación automatizada y consistente de recursos idénticos en diferentes unidades.
`
},

{
  id: 17,
  category: "Azure Resource Manager",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

La infraestructura de tu empresa incluye varias unidades de negocio que necesitan una gran cantidad de recursos de Azure para sus operaciones diarias.

Los recursos requeridos por cada unidad de negocio son idénticos.

Debes implementar una estrategia para crear recursos de Azure automáticamente.

Solución: Recomiendas incluir grupos de administración (Management Groups) en la estrategia.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `
El enfoque correcto para crear recursos de Azure automáticamente, cuando varias unidades de negocio requieren recursos idénticos, es utilizar plantillas de Azure Resource Manager (ARM).

Los grupos de administración en Azure se utilizan principalmente para organizar recursos, administrar accesos, aplicar políticas y garantizar cumplimiento entre múltiples suscripciones. Sin embargo, no facilitan la creación automática de recursos.

Por ello, las plantillas ARM son necesarias, ya que permiten automatizar y escalar la implementación de recursos para cada unidad de negocio.
`
},

{
  id: 18,
  category: "Azure Resource Manager",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

La infraestructura de tu empresa incluye varias unidades de negocio que necesitan una gran cantidad de recursos de Azure para sus operaciones diarias.

Los recursos requeridos por cada unidad de negocio son idénticos.

Debes implementar una estrategia para crear recursos de Azure automáticamente.

Solución: Recomiendas incluir plantillas de Azure Resource Manager (ARM) en la estrategia.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [0],

  explanation_es: `
Recomendar plantillas de Azure Resource Manager (ARM) se alinea perfectamente con el requisito de automatizar la creación de recursos de Azure en múltiples unidades de negocio.

Las plantillas ARM están diseñadas como archivos JSON que permiten definir y administrar infraestructura y configuraciones de manera automática. Este enfoque facilita desplegar configuraciones idénticas en distintas unidades, garantizando consistencia y escalabilidad.

Además, las plantillas ARM reducen el esfuerzo manual y son ideales para implementaciones repetitivas y a gran escala, por lo que la solución cumple correctamente el objetivo planteado.
`
},

{
  id: 19,
  category: "High Availability",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

Debes implementar una aplicación LOB crítica en Azure, la cual se instalará en una máquina virtual.

Se te informa que la estrategia de implementación debe permitir una disponibilidad garantizada del 99.99 %.

Debes asegurarte de que la estrategia utilice la menor cantidad posible de máquinas virtuales y zonas de disponibilidad.

Solución: Incluyes dos máquinas virtuales y una zona de disponibilidad en la estrategia.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `
La solución no cumple el objetivo.

Para alcanzar un SLA del 99.99 % con Azure Availability Zones, las máquinas virtuales deben distribuirse entre diferentes zonas de disponibilidad. Utilizar dos máquinas virtuales dentro de una sola zona no proporciona redundancia frente a fallos de zona completa.

Aunque la solución intenta minimizar la cantidad de máquinas virtuales y zonas utilizadas, una única Availability Zone no garantiza el nivel de disponibilidad requerido.

Por ello, la solución no satisface el objetivo planteado.
`
},

{
  id: 20,
  category: "High Availability",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

Debes implementar una aplicación LOB crítica en Azure, la cual se instalará en una máquina virtual.

Se te informa que la estrategia de implementación debe permitir una disponibilidad garantizada del 99.99 %.

Debes asegurarte de que la estrategia utilice la menor cantidad posible de máquinas virtuales y zonas de disponibilidad.

Solución: Incluyes una máquina virtual y dos zonas de disponibilidad en la estrategia.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `
La solución no cumple el objetivo.

Aunque se utilizan dos zonas de disponibilidad, solo existe una máquina virtual. Una única máquina virtual no puede proporcionar redundancia ni alta disponibilidad frente a fallos de infraestructura o de zona.

Para alcanzar un SLA del 99.99 %, Azure requiere múltiples instancias distribuidas entre zonas de disponibilidad.

Por ello, la solución no satisface el objetivo planteado.
`
},

{
  id: 21,
  category: "High Availability",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

Debes implementar una aplicación LOB crítica en Azure, la cual se instalará en una máquina virtual.

Se te informa que la estrategia de implementación debe permitir una disponibilidad garantizada del 99.99 %.

Debes asegurarte de que la estrategia utilice la menor cantidad posible de máquinas virtuales y zonas de disponibilidad.

Solución: Incluyes dos máquinas virtuales y dos zonas de disponibilidad en la estrategia.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [0],

  explanation_es: `
La solución sí cumple el objetivo.

El uso de dos máquinas virtuales distribuidas entre dos zonas de disponibilidad proporciona redundancia y alta disponibilidad. Esta configuración permite alcanzar el SLA del 99.99 % requerido por Azure.

Además, la solución utiliza la menor cantidad posible de máquinas virtuales y zonas de disponibilidad para cumplir el requisito de disponibilidad.

Por ello, la solución satisface el objetivo planteado.
`
},

{
  id: 22,
  category: "Azure Management",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

Los desarrolladores de tu empresa planean implementar una gran cantidad de máquinas virtuales personalizadas semanalmente. Estas máquinas virtuales serán eliminadas durante la misma semana en la que fueron implementadas.

El 60 % de las máquinas virtuales tendrá Windows Server 2016 instalado, mientras que el 40 % restante tendrá Ubuntu Linux.

Debes asegurarte de que el esfuerzo administrativo necesario para este proceso se reduzca utilizando un servicio adecuado de Azure.

Solución: Recomiendas utilizar Microsoft Managed Desktop.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `
La solución no cumple el objetivo.

La opción adecuada para reducir el esfuerzo administrativo en la implementación y eliminación frecuente de máquinas virtuales sería Azure DevTest Labs, no Microsoft Managed Desktop.

Azure DevTest Labs está diseñado específicamente para escenarios donde se requiere aprovisionar y desaprovisionar rápidamente entornos de máquinas virtuales, lo que se ajusta perfectamente a la necesidad de administrar entornos temporales de desarrollo y pruebas.
`
},

{
  id: 23,
  category: "Azure Management",
  type: "single",

    note_es: `
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
`,

  question_es: `
Los desarrolladores de tu empresa planean implementar una gran cantidad de máquinas virtuales personalizadas semanalmente. También eliminarán estas máquinas virtuales durante la misma semana en la que fueron implementadas.

El 60 % de las máquinas virtuales tendrá Windows Server 2016 instalado, mientras que el 40 % restante tendrá Ubuntu Linux.

Debes asegurarte de que el esfuerzo administrativo necesario para este proceso se reduzca utilizando un servicio adecuado de Azure.

Solución: Recomiendas utilizar Azure Reserved Virtual Machine (VM) Instances.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `
La solución no cumple el objetivo.

Azure Reserved VM Instances no es la opción adecuada para este escenario, ya que requiere compromisos de uno a tres años para las máquinas virtuales, lo cual no encaja con implementaciones y eliminaciones frecuentes realizadas semanalmente.

Azure DevTest Labs sería más apropiado, ya que permite crear y eliminar rápidamente entornos de máquinas virtuales, alineándose perfectamente con la necesidad de flexibilidad y reducción del esfuerzo administrativo en la gestión de entornos temporales de desarrollo y pruebas.
`
},

{
  id: 24,
  category: "Azure Management",
  type: "single",

  note_es: `
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
`,

  question_es: `
Los desarrolladores de tu empresa planean implementar una gran cantidad de máquinas virtuales personalizadas semanalmente. También eliminarán estas máquinas virtuales durante la misma semana en la que fueron implementadas.

El 60 % de las máquinas virtuales tendrá Windows Server 2016 instalado, mientras que el 40 % restante tendrá Ubuntu Linux.

Debes asegurarte de que el esfuerzo administrativo necesario para este proceso se reduzca utilizando un servicio adecuado de Azure.

Solución: Recomiendas utilizar Azure DevTest Labs.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [0],

  explanation_es: `
La solución sí cumple el objetivo.

Azure DevTest Labs está diseñado para escenarios de desarrollo y pruebas donde es necesario crear y eliminar rápidamente máquinas virtuales y entornos temporales.

Este servicio ayuda a reducir el esfuerzo administrativo mediante automatización, plantillas y administración simplificada de recursos, lo que lo hace ideal para implementaciones frecuentes de máquinas virtuales Windows y Linux.
`
},

{
  id: 25,
  category: "Azure Networking",
  type: "single",

  question_es: `
Tu empresa tiene máquinas virtuales (VMs) hospedadas en Microsoft Azure. Las VMs están ubicadas en una única red virtual de Azure llamada VNet1.

La empresa tiene usuarios que trabajan remotamente. Los trabajadores remotos requieren acceso a las VMs en VNet1.

Debes proporcionar acceso a los trabajadores remotos.

¿Qué deberías hacer?
`,

  options_es: [
    "Configurar una VPN Site-to-Site (S2S).",
    "Configurar una VPN VNet-to-VNet.",
    "Configurar una VPN Point-to-Site (P2S).",
    "Configurar DirectAccess en una VM con Windows Server 2012.",
    "Configurar una VPN Multi-Site."
  ],

  correct: [2],

  explanation_es: `

Una conexión VPN Point-to-Site (P2S) permite crear una conexión segura hacia una red virtual desde un equipo cliente individual.

Este tipo de VPN es ideal para usuarios remotos que necesitan conectarse de forma segura a los recursos hospedados en Azure.
`
},

{
  id: 26,
  category: "Azure Security",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

Se te ha informado que la empresa planea automatizar el despliegue de servidores en Azure. Sin embargo, existe preocupación de que las credenciales administrativas puedan quedar expuestas durante este proceso.

Debes asegurarte de que, durante el despliegue, las credenciales administrativas estén cifradas utilizando una solución adecuada de Azure.

Solución: Recomiendas utilizar Azure Information Protection.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `

Azure Information Protection está diseñado para clasificar, etiquetar y proteger documentos y correos electrónicos, pero no para cifrar credenciales administrativas durante despliegues automatizados en Azure.

Para proteger credenciales administrativas en procesos de automatización, se deben utilizar servicios como Azure Key Vault.
`
},

{
  id: 27,
  category: "Azure Security",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

Se te ha informado que la empresa planea automatizar el despliegue de servidores en Azure. Sin embargo, existe preocupación de que las credenciales administrativas puedan quedar expuestas durante este proceso.

Debes asegurarte de que, durante el despliegue, las credenciales administrativas estén cifradas utilizando una solución adecuada de Azure.

Solución: Recomiendas utilizar Azure Multi-Factor Authentication (MFA).

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `

Azure Multi-Factor Authentication (MFA) proporciona una capa adicional de autenticación para validar la identidad de los usuarios, pero no está diseñado para cifrar credenciales administrativas durante despliegues automatizados.

Para proteger y cifrar credenciales en procesos de automatización, se debe utilizar una solución como Azure Key Vault.
`
},

{
  id: 28,
  category: "Azure Government",
  type: "multiple",

    question_es: `
<div class="question-note">
Selecciona las dos opciones correctas.
</div>

Tu empresa desea desarrollar una solución en la nube utilizando Azure Government. Azure Government solo puede ser utilizado por determinados tipos de clientes para desarrollar soluciones en la nube. ¿Cuál de los siguientes tipos de clientes puede utilizar Azure Government en esta situación?
`,

  options_es: [
    "Un contratista gubernamental de cualquier país.",
    "Una entidad gubernamental de cualquier país.",
    "Un contratista gubernamental europeo.",
    "Una entidad gubernamental europea.",
    "Un contratista del gobierno de Estados Unidos.",
    "Una entidad gubernamental de Estados Unidos."
  ],

  correct: [4, 5],

  explanation_es: "Azure Government es una nube especializada diseñada exclusivamente para agencias gubernamentales de Estados Unidos y sus socios autorizados. Los clientes permitidos incluyen entidades gubernamentales de Estados Unidos y contratistas del gobierno de Estados Unidos. No está disponible para gobiernos o contratistas de otros países."
},

{
  id: 29,
  category: "Azure AD Identity Protection",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

Tu empresa tiene un entorno de Azure Active Directory (Azure AD). Los usuarios se conectan ocasionalmente a Azure AD mediante Internet.

Se te ha solicitado asegurarte de que los usuarios que se conecten a Azure AD desde una dirección IP no identificada sean automáticamente obligados a cambiar sus contraseñas.

Solución: Configuras el uso de Azure AD Identity Protection.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [0],

  explanation_es: `

Azure AD Identity Protection permite detectar inicios de sesión riesgosos, incluidos accesos desde direcciones IP desconocidas o sospechosas.

Además, puede aplicar políticas automáticas para obligar a los usuarios a cambiar sus contraseñas cuando se detecta un riesgo durante el inicio de sesión.
`
},

{
  id: 30,
  category: "Azure AD Security",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

Tu empresa tiene un entorno de Azure Active Directory (Azure AD). Los usuarios se conectan ocasionalmente a Azure AD mediante Internet.

Se te ha solicitado asegurarte de que los usuarios que se conecten a Azure AD desde una dirección IP no identificada sean automáticamente obligados a cambiar sus contraseñas.

Solución: Configuras el uso de Azure AD Privileged Identity Management.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `

Azure AD Privileged Identity Management (PIM) está diseñado para administrar, controlar y supervisar accesos privilegiados dentro de Azure AD, Azure y otros servicios de Microsoft.

Sin embargo, no detecta inicios de sesión riesgosos ni obliga automáticamente a los usuarios a cambiar sus contraseñas cuando acceden desde direcciones IP desconocidas.

La solución adecuada para este escenario es Azure AD Identity Protection.
`
},

{
  id: 31,
  category: "Azure Networking",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

Estás planeando una estrategia para desplegar numerosos servidores web y servidores de bases de datos en Azure.

Esta estrategia debe permitir controlar los tipos de conexiones entre los servidores web y los servidores de bases de datos.

Solución: Incluyes grupos de seguridad de red (NSG) en tu estrategia.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [0],

  explanation_es: `

Los grupos de seguridad de red (NSG) permiten controlar el tráfico de red entrante y saliente mediante reglas de seguridad.

Con los NSG es posible permitir o bloquear determinados tipos de conexiones entre servidores web y servidores de bases de datos, cumpliendo así el objetivo del escenario.
`
},

{
  id: 32,
  category: "Azure Networking",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

Estás planeando una estrategia para desplegar numerosos servidores web y servidores de bases de datos en Azure.

Esta estrategia debe permitir controlar los tipos de conexiones entre los servidores web y los servidores de bases de datos.

Solución: Incluyes una puerta de enlace de red local (Local Network Gateway) en tu estrategia.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `

Una Local Network Gateway se utiliza para representar una ubicación de red local en configuraciones VPN híbridas entre Azure y entornos on-premises.

Sin embargo, no sirve para controlar ni filtrar los tipos de conexiones entre servidores dentro de Azure.

Para controlar el tráfico y las conexiones entre servidores web y servidores de bases de datos se deben utilizar grupos de seguridad de red (NSG).
`
},

{
  id: 33,
  category: "Azure Identity",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas con el mismo escenario general. Cada pregunta tiene un resultado diferente. Debes determinar si la solución cumple el objetivo.
</div>

El bosque de Active Directory de tu empresa incluye miles de cuentas de usuario.

Se te ha informado que todos los recursos de red serán migrados a Azure. Posteriormente, el centro de datos local será retirado.

Debes implementar una estrategia que reduzca el impacto sobre los usuarios una vez completada la migración planificada.

Solución: Planeas requerir Azure Multi-Factor Authentication (MFA).

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `

Azure Multi-Factor Authentication (MFA) proporciona una capa adicional de seguridad durante el inicio de sesión, pero no reduce el impacto de la migración para los usuarios ni facilita la transición de identidades hacia Azure.

Para minimizar el impacto sobre los usuarios durante una migración a Azure, se debe sincronizar Active Directory local con Azure AD utilizando herramientas como Azure AD Connect.
`
},

{
  id: 34,
  category: "Cloud Concepts",
  type: "multiple",

  question_es: `
<div class="question-note">
Pregunta adaptada a selección múltiple.<br>
Selecciona las dos afirmaciones verdaderas sobre PaaS.
</div>

¿Cuáles de las siguientes afirmaciones sobre una solución Platform as a Service (PaaS) que hospeda aplicaciones web en Azure son correctas?
`,

  options_es: [
    "Proporciona control total sobre los sistemas operativos que alojan las aplicaciones.",
    "Proporciona la capacidad de escalar automáticamente la plataforma.",
    "Proporciona servicios y herramientas de desarrollo para agregar funcionalidades a aplicaciones personalizadas."
  ],

  correct: [1, 2],

  explanation_es: `

  <ul>
  <li>Afirmación 1: No. Una solución PaaS no proporciona acceso ni control total sobre el sistema operativo. Azure Web Apps ofrece un entorno administrado para hospedar aplicaciones web.</li>
  <li>Afirmación 2: Sí. Una solución PaaS que hospeda aplicaciones web en Azure puede escalar automáticamente la plataforma. Esto se conoce como autoscaling.</li>
  <li>Afirmación 3: Sí. PaaS proporciona un marco y herramientas que permiten a los desarrolladores crear, personalizar y agregar funcionalidades a aplicaciones en la nube.</li>
</ul>
`
},

{
  id: 35,
  category: "Cloud Concepts",
  type: "multiple",

  question_es: `
<div class="question-note">
Pregunta adaptada a selección múltiple.<br>
Selecciona las dos afirmaciones verdaderas.
</div>

¿Cuáles de las siguientes afirmaciones son correctas respecto a Azure y las máquinas virtuales?
`,

  options_es: [
    "Azure proporciona flexibilidad entre gastos de capital (CapEx) y gastos operativos (OpEx).",

    "Si creas dos máquinas virtuales de Azure que usan el tamaño B2S, cada máquina virtual siempre generará los mismos costos mensuales.",

    "Cuando una máquina virtual de Azure se detiene, continúas pagando los costos de almacenamiento asociados a la máquina virtual."
  ],

  correct: [0, 2],

  explanation_es: `

  <ul>
  <li>Afirmación 1: Sí. Azure proporciona flexibilidad entre CapEx y OpEx. Con el modelo de pago por uso, las organizaciones pueden reducir inversiones iniciales y pagar únicamente por los recursos consumidos.</li>
  <li>Afirmación 2: No. Dos máquinas virtuales con el mismo tamaño pueden tener diferentes configuraciones de discos y almacenamiento, por lo que los costos mensuales pueden variar.</li>
  <li>Afirmación 3: Sí. Cuando una máquina virtual se detiene, se deja de pagar el cómputo, pero se siguen pagando los costos asociados al almacenamiento, como discos administrados y copias de seguridad.</li>
</ul>
`
},

{
  id: 36,
  category: "Cloud Concepts",
  type: "dropdown_code",

  question_es: `
<div class="question-note">
Completa la oración seleccionando la opción correcta en el área de respuesta.
</div>

Cuando implementas una solución Software as a Service (SaaS), eres responsable de:
`,

  code_lines: [
    "___responsabilidad___"
  ],

  blanks: [
    {
      id: "responsabilidad",
      options: [
        "Configurar alta disponibilidad.",
        "Definir reglas de escalabilidad.",
        "Instalar la solución SaaS.",
        "Configurar la solución SaaS."
      ],
      correct: "Configurar la solución SaaS."
    }
  ],

  explanation_es: `
Cuando implementas una solución Software as a Service (SaaS), eres responsable de configurar la solución SaaS. Todo lo demás es administrado por el proveedor de la nube.
`
},

{
  id: 37,
  category: "Cloud Concepts",
  type: "single",

  question_es: `
Tu empresa tiene una red local que contiene varios servidores.

Planeas migrar todos los servidores a Azure.

Necesitas recomendar una solución para garantizar que algunos de los servidores permanezcan disponibles si un único centro de datos de Azure queda fuera de servicio durante un período prolongado.

¿Qué deberías incluir en la recomendación?
`,

  options_es: [
    "Tolerancia a fallos",
    "Elasticidad",
    "Escalabilidad",
    "Baja latencia"
  ],

  correct: [0],

  explanation_es: `

La tolerancia a fallos es la capacidad de un sistema para continuar funcionando en caso de que fallen algunos de sus componentes.

En este escenario, los servidores podrían replicarse entre distintos centros de datos mediante Zonas de Disponibilidad de Azure.

Las Zonas de Disponibilidad son ubicaciones físicas independientes dentro de una región de Azure. Cada zona cuenta con energía, refrigeración y red independientes. Si una zona falla, las aplicaciones y datos replicados continúan disponibles en otra zona.
`
},

{
  id: 38,
  category: "Cloud Concepts",
  type: "single",

  question_es: `
<div class="question-note">
Selecciona la opción correcta.
</div>

Una organización que hospeda su infraestructura __________ ya no requiere un centro de datos.
`,

  options_es: [
    "En una nube privada",
    "En una nube híbrida",
    "En la nube pública",
    "En un host Hyper-V"
  ],

  correct: [2],

  explanation_es: `

Una nube privada está alojada en el centro de datos de la organización. Por lo tanto, no es posible eliminar el centro de datos si se utiliza una nube privada.

Una nube pública está alojada externamente, por ejemplo, en Microsoft Azure. Una organización que hospeda su infraestructura en una nube pública puede cerrar su centro de datos.

La nube pública es el modelo de implementación más común. En este modelo no existe hardware local que administrar o mantener actualizado, ya que todo se ejecuta sobre la infraestructura del proveedor de nube.

Microsoft Azure es un ejemplo de proveedor de nube pública.

En una nube privada, la organización crea un entorno de nube dentro de su propio centro de datos y sigue siendo responsable de la compra y mantenimiento del hardware y software.
`
},

{
  id: 39,
  category: "Cloud Concepts",
  type: "multiple",

  question_es: `
<div class="question-note">
Selecciona las dos opciones correctas.
</div>

¿Cuáles son dos características de la nube pública?
`,

  options_es: [
    "Hardware dedicado",
    "Conexiones no seguras",
    "Almacenamiento limitado",
    "Precios por consumo",
    "Administración de autoservicio"
  ],

  correct: [3, 4],

  explanation_es: `
Las respuestas correctas son “Precios por consumo” y “Administración de autoservicio”.<br><br>

Con la nube pública, se utiliza un modelo de pago por uso, donde solo se paga por los recursos consumidos y no existen costos iniciales elevados de infraestructura.

Además, la nube pública ofrece administración de autoservicio. El usuario es responsable de implementar y configurar los recursos en la nube, como máquinas virtuales o sitios web, mientras que el proveedor de nube administra el hardware subyacente.<br><br>

Las demás opciones son incorrectas porque:

  <ul>
  <li>El hardware no es dedicado. La infraestructura física es compartida entre múltiples clientes.</li>
  <li>Las conexiones hacia la nube pública son seguras.</li>
  <li>El almacenamiento no es limitado, ya que puede ampliarse según las necesidades del usuario.</li>
</ul>

`
},

{
  id: 40,
  category: "Cloud Concepts",
  type: "single",

  question_es: `
<div class="question-note">
Selecciona la opción correcta.
</div>

Cuando planeas migrar un sitio web público a Azure, debes planificar:
`,

  options_es: [
    "Implementar una VPN",
    "Pagar costos mensuales por uso",
    "Pagar por transferir todos los datos del sitio web a Azure",
    "Reducir el número de conexiones al sitio web"
  ],

  correct: [1],

  explanation_es: `

Cuando se planea migrar un sitio web público a Azure, se debe considerar el pago mensual basado en el consumo de recursos. Esto se debe a que Azure utiliza un modelo de pago por uso (pay-as-you-go), donde los costos dependen de los servicios y recursos utilizados.
`
},

{
  id: 41,
  category: "Azure PaaS",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas que presentan el mismo escenario. Cada pregunta contiene una solución única que podría cumplir los objetivos establecidos. Algunas preguntas pueden tener más de una solución correcta, mientras que otras pueden no tener ninguna solución correcta.
</div>

Tu empresa planea migrar todos sus datos y recursos a Azure.

El plan de migración de la empresa establece que solo deben utilizarse soluciones Platform as a Service (PaaS) en Azure.

Debes implementar un entorno de Azure que cumpla con el plan de migración de la empresa.

Solución: Creas un Azure App Service y bases de datos Azure SQL.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [0],

  explanation_es: `

Azure App Service y Azure SQL Database son ejemplos de soluciones PaaS de Azure. Por lo tanto, esta solución sí cumple con el objetivo establecido en el plan de migración.
`
},

{
  id: 42,
  category: "Azure PaaS",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas que presentan el mismo escenario. Cada pregunta contiene una solución única que podría cumplir los objetivos establecidos. Algunas preguntas pueden tener más de una solución correcta, mientras que otras pueden no tener ninguna solución correcta.
</div>

Tu empresa planea migrar todos sus datos y recursos a Azure.

El plan de migración de la empresa establece que solo deben utilizarse soluciones Platform as a Service (PaaS) en Azure.

Debes implementar un entorno de Azure que cumpla con el plan de migración de la empresa.

Solución: Creas un Azure App Service y máquinas virtuales de Azure con Microsoft SQL Server instalado.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `

Azure App Service es un servicio PaaS (Platform as a Service). Sin embargo, las máquinas virtuales de Azure son un servicio IaaS (Infrastructure as a Service), no un servicio PaaS.

Por lo tanto, esta solución no cumple con el objetivo, ya que el plan de migración requiere utilizar únicamente soluciones PaaS en Azure.

Nota: Al igual que IaaS, PaaS incluye infraestructura como servidores, almacenamiento y redes, pero además incorpora middleware, herramientas de desarrollo, servicios de inteligencia de negocio (BI), sistemas de administración de bases de datos y más. PaaS está diseñado para soportar todo el ciclo de vida de las aplicaciones web: creación, pruebas, implementación, administración y actualización.
`
},

{
  id: 43,
  category: "Azure PaaS",
  type: "single",

  question_es: `
<div class="question-note">
Nota: Esta pregunta forma parte de una serie de preguntas que presentan el mismo escenario. Cada pregunta contiene una solución única que podría cumplir los objetivos establecidos. Algunas preguntas pueden tener más de una solución correcta, mientras que otras pueden no tener ninguna solución correcta.
</div>

Tu empresa planea migrar todos sus datos y recursos a Azure.

El plan de migración de la empresa establece que solo deben utilizarse soluciones Platform as a Service (PaaS) en Azure.

Debes implementar un entorno de Azure que cumpla con el plan de migración de la empresa.

Solución: Creas un Azure App Service y cuentas de Azure Storage.

¿La solución cumple el objetivo?
`,

  options_es: [
    "Sí",
    "No"
  ],

  correct: [1],

  explanation_es: `

Azure App Service es una solución PaaS. Sin embargo, las cuentas de Azure Storage no se consideran una solución PaaS completa dentro de este escenario de migración.

Por lo tanto, la solución no cumple completamente con el objetivo establecido por el plan de migración de utilizar únicamente soluciones Platform as a Service (PaaS) en Azure.
`
},

{
  id: 44,
  category: "Cloud Concepts",
  type: "single",

  question_es: `
Tu empresa aloja una aplicación contable llamada App1 que es utilizada por todos los clientes de la empresa.

App1 tiene un uso bajo durante las primeras tres semanas de cada mes y un uso muy alto durante la última semana de cada mes.

¿Qué beneficio de Azure Cloud Services ayuda a administrar los costos para este tipo de patrón de uso?
`,

  options_es: [
    "Alta disponibilidad",
    "Alta latencia",
    "Elasticidad",
    "Balanceo de carga"
  ],

  correct: [2],

  explanation_es: `

La elasticidad en este caso es la capacidad de proporcionar recursos de cómputo adicionales cuando son necesarios y reducirlos cuando ya no se necesitan, permitiendo disminuir costos.

El autoescalado es un ejemplo de elasticidad.

La computación elástica es la capacidad de aumentar o disminuir rápidamente recursos de procesamiento, memoria y almacenamiento para adaptarse a demandas cambiantes sin preocuparse por la planificación de capacidad o por preparar infraestructura para los picos de uso.

Con la elasticidad en la nube, una empresa evita pagar por capacidad no utilizada o recursos inactivos y no necesita invertir en la compra y mantenimiento de infraestructura adicional.
`
},

{
  id: 45,
  category: "Cloud Concepts",
  type: "single",

  question_es: `
Planeas migrar una aplicación web a Azure. La aplicación web es accedida por usuarios externos.

Debes recomendar una solución de implementación en la nube que minimice el esfuerzo administrativo necesario para administrar la aplicación web.

¿Qué debes incluir en la recomendación?
`,

  options_es: [
    "Software as a Service (SaaS)",
    "Platform as a Service (PaaS)",
    "Infrastructure as a Service (IaaS)",
    "Database as a Service (DaaS)"
  ],

  correct: [1],

  explanation_es: `

Azure App Service es una oferta Platform as a Service (PaaS) que permite crear aplicaciones web y móviles para cualquier plataforma o dispositivo y conectarlas a datos en cualquier lugar, ya sea en la nube o en entornos locales.

App Service incluye capacidades web y móviles que anteriormente se ofrecían por separado como Azure Websites y Azure Mobile Services.

PaaS reduce el esfuerzo administrativo porque Azure se encarga de administrar la infraestructura subyacente, el sistema operativo, el mantenimiento y el escalado de la plataforma.
`
},

{
  id: 46,
  category: "Cloud Concepts",
  type: "dropdown_code",
  points_per_selection: true,

  question_es: `
<div class="question-note">
Para responder, selecciona las opciones correctas en el área de respuesta.
</div>
¿Qué solución de implementación en la nube se utiliza para Azure Virtual Machines y Azure SQL Database?<br><br>

<div class="question-note">
NOTA: Cada selección correcta vale un punto.
</div>

`,

  code_lines: [
    "Azure Virtual Machines: ___vm___",
    "",
    "Azure SQL Database: ___sql___"
  ],

  blanks: [
    {
      id: "vm",
      label: "Azure Virtual Machines",
      options: [
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Software as a Service (SaaS)"
      ],
      correct: "Infrastructure as a Service (IaaS)"
    },
    {
      id: "sql",
      label: "Azure SQL Database",
      options: [
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Software as a Service (SaaS)"
      ],
      correct: "Platform as a Service (PaaS)"
    }
  ],

  explanation_es: `
Azure Virtual Machines corresponde a Infrastructure as a Service (IaaS).

IaaS es la categoría más flexible de servicios en la nube. Permite tener control completo sobre el hardware virtualizado, sistemas operativos, almacenamiento y redes.

Azure SQL Database corresponde a Platform as a Service (PaaS).

Azure SQL Database es un motor de base de datos totalmente administrado que maneja automáticamente actualizaciones, copias de seguridad, monitoreo y alta disponibilidad.
`
},

{
  id: 47,
  category: "Cloud Concepts",
  type: "single",

  question_es: `
Tienes una red local que contiene 100 servidores.

Debes recomendar una solución que proporcione recursos adicionales a los usuarios. La solución debe minimizar los costos de capital (CapEx) y operativos (OpEx).

¿Qué debes incluir en la recomendación?
`,

  options_es: [
    "Una migración completa a la nube pública",
    "Un centro de datos adicional",
    "Una nube privada",
    "Una nube híbrida"
  ],

  correct: [3],

  explanation_es: `

Una nube híbrida es una combinación de una nube privada y una nube pública.

Con una nube híbrida, puedes continuar utilizando los servidores locales mientras agregas nuevos recursos en la nube pública, como Azure. Esto ayuda a reducir los costos de capital (CapEx), ya que no necesitas comprar nueva infraestructura física.

Además, permite minimizar costos operativos al aprovechar la escalabilidad y el modelo de pago por uso de la nube pública.
`
},

{
  id: 48,
  category: "Cloud Concepts",
  type: "match_dropdown",

  question_es: `
<div class="question-note">
Para cada afirmación, selecciona “Sí” si la afirmación es verdadera. De lo contrario, selecciona “No”.
</div>

`,

  matches: [
    {
      left: "Para lograr un modelo de nube híbrida, una empresa siempre debe migrar desde una nube privada.",
      options: ["Sí", "No"],
      correct: "No"
    },
    {
      left: "Una empresa puede ampliar la capacidad de su red interna utilizando la nube pública.",
      options: ["Sí", "No"],
      correct: "Sí"
    },
    {
      left: "En un modelo de nube pública, solo los usuarios invitados pueden acceder a los recursos en la nube.",
      options: ["Sí", "No"],
      correct: "No"
    }
  ],

  explanation_es: `
<strong>Box 1: No -</strong><br>
No es cierto que una empresa deba migrar siempre desde una nube privada para implementar un modelo de nube híbrida. Una empresa puede combinar infraestructura local, nube privada o nube pública según sus necesidades.

<br><br>

<strong>Box 2: Sí -</strong><br>
Una empresa puede ampliar la capacidad de su red interna utilizando la nube pública. Esto es común cuando se necesita más capacidad sin comprar nueva infraestructura local.

<br><br>

<strong>Box 3: No -</strong><br>
No es cierto que solo los usuarios invitados puedan acceder a los recursos en la nube pública. Cualquier usuario autorizado, por ejemplo mediante Azure Active Directory, puede tener acceso según los permisos configurados.
`
},


{
  id: 49,
  category: "Cloud Concepts",
  type: "single",

  question_es: `
Planeas migrar varios servidores desde una red local hacia Azure.

¿Cuál es una ventaja de utilizar un servicio de nube pública para los servidores en comparación con una red local?
`,

  options_es: [
    "La nube pública es propiedad del público y no de una empresa privada",
    "La nube pública es una solución colaborativa donde las empresas pueden mejorar la nube",
    "Todos los recursos de la nube pública pueden ser accedidos libremente por cualquier persona",
    "La nube pública es una entidad compartida donde múltiples empresas utilizan una parte de los recursos en la nube"
  ],

  correct: [3],

  explanation_es: `

En la nube pública, múltiples organizaciones comparten la infraestructura administrada por el proveedor de nube, como Microsoft Azure. Cada empresa utiliza una parte de los recursos disponibles, como máquinas virtuales, redes y almacenamiento.

Las demás opciones son incorrectas porque:

• La nube pública no es propiedad del público. En Azure, la infraestructura pertenece a Microsoft.

• La nube pública no es una solución colaborativa donde las empresas mejoran la plataforma.

• Los recursos de la nube pública no son accesibles libremente por cualquier persona. El acceso está controlado mediante cuentas, autenticación y permisos.
`
},

{
  id: 50,
  category: "Cloud Concepts",
  type: "single",

  question_es: `
<div class="question-note">
Selecciona la opción correcta.
</div>  

Azure Site Recovery proporciona ________ para máquinas virtuales.
`,

  options_es: [
    "Tolerancia a fallos",
    "Recuperación ante desastres",
    "Elasticidad",
    "Alta disponibilidad"
  ],

  correct: [1],

  explanation_es: `

Azure Site Recovery ayuda a garantizar la continuidad del negocio manteniendo aplicaciones y cargas de trabajo funcionando durante interrupciones.

Site Recovery replica cargas de trabajo que se ejecutan en máquinas físicas y máquinas virtuales desde una ubicación principal hacia una ubicación secundaria.
`
},

{
  id: 51,
  category: "Cloud Concepts",
  type: "single",

  question_es: `
¿En qué tipo de modelo de nube todos los recursos de hardware son propiedad de un tercero y se comparten entre múltiples clientes?
`,

  options_es: [
    "Privada",
    "Híbrida",
    "Pública"
  ],

  correct: [2],

  explanation_es: `
Microsoft Azure, Amazon Web Services y Google Cloud son ejemplos de servicios de nube pública.

En una nube pública, el proveedor de nube es propietario del hardware y la infraestructura. Los clientes comparten los recursos disponibles de manera segura mediante un modelo multi-tenant.
`
},

{
  id: 52,
  category: "Cloud Concepts",
  type: "single",

  question_es: `
Tienes 1.000 máquinas virtuales hospedadas en hosts Hyper-V en un centro de datos.

Planeas migrar todas las máquinas virtuales a una suscripción de Azure de pago por uso.

¿Qué modelo de gasto debes identificar para la solución planeada en Azure?
`,

  options_es: [
    "Operacional",
    "Elástico",
    "Capital",
    "Escalable"
  ],

  correct: [0],

  explanation_es: `
El modelo de pago por uso de Azure corresponde a un gasto operacional (OpEx).

Con este modelo, pagas únicamente por los recursos consumidos, sin necesidad de realizar grandes inversiones iniciales en infraestructura física, hardware o centros de datos.
`
},

{
  id: 53,
  category: "Cloud Concepts",
  type: "match",

  question_es: `
Relaciona cada beneficio de los servicios en la nube con su descripción correcta.
`,

  matches: [
    {
      left: "Un servicio en la nube que permanece disponible después de una falla",
      correct: "Tolerancia a fallos",
      options: [
        "Recuperación ante desastres",
        "Tolerancia a fallos",
        "Baja latencia",
        "Escalabilidad dinámica"
      ]
    },
    {
      left: "Un servicio en la nube que puede recuperarse después de una falla",
      correct: "Recuperación ante desastres",
      options: [
        "Recuperación ante desastres",
        "Tolerancia a fallos",
        "Baja latencia",
        "Escalabilidad dinámica"
      ]
    },
    {
      left: "Un servicio en la nube que mantiene un buen rendimiento cuando aumenta la demanda",
      correct: "Escalabilidad dinámica",
      options: [
        "Recuperación ante desastres",
        "Tolerancia a fallos",
        "Baja latencia",
        "Escalabilidad dinámica"
      ]
    },
    {
      left: "Un servicio en la nube al que se puede acceder rápidamente desde Internet",
      correct: "Baja latencia",
      options: [
        "Recuperación ante desastres",
        "Tolerancia a fallos",
        "Baja latencia",
        "Escalabilidad dinámica"
      ]
    }
  ],

  explanation_es: `
La tolerancia a fallos permite que un servicio continúe disponible incluso cuando falla uno de sus componentes.

La recuperación ante desastres permite restaurar un servicio después de una interrupción o fallo.

La escalabilidad dinámica permite agregar recursos automáticamente cuando aumenta la carga del sistema.

La baja latencia significa tiempos de respuesta rápidos al acceder a un servicio desde Internet.
`
},

{
  id: 54,
  category: "Cloud Concepts",
  type: "match_dropdown",
  points_per_selection: true,

  question_es: `
<div class="question-note">
Para cada afirmación, selecciona “Sí” si la afirmación es verdadera. De lo contrario, selecciona “No”.
</div>

<div class="question-note">
<strong>NOTA:</strong> Cada selección correcta vale un punto.
</div>
`,

  matches: [
    {
      left: "Para implementar un modelo de nube híbrida, una empresa debe tener una red interna.",
      options: ["Sí", "No"],
      correct: "No"
    },
    {
      left: "Una empresa puede ampliar los recursos de cómputo de su red interna mediante una nube híbrida.",
      options: ["Sí", "No"],
      correct: "Sí"
    },
    {
      left: "En un modelo de nube pública, solo los usuarios invitados de la empresa pueden acceder a los recursos en la nube.",
      options: ["Sí", "No"],
      correct: "No"
    }
  ],

  explanation_es: `
<strong>Box 1: No -</strong><br>
No es cierto que una empresa deba migrar siempre desde una red interna para implementar una nube híbrida. Una organización puede comenzar con servicios de nube pública y luego combinar esa infraestructura con recursos locales para crear un entorno híbrido.

<br><br>

<strong>Box 2: Sí -</strong><br>
Una empresa puede ampliar los recursos de cómputo de su red interna mediante una nube híbrida. Esto es muy común cuando se necesitan más recursos sin invertir inmediatamente en nueva infraestructura local.

<br><br>

<strong>Box 3: No -</strong><br>
No es cierto que únicamente los usuarios invitados puedan acceder a los recursos de la nube pública. El acceso depende de las configuraciones de identidad y permisos definidas por la organización.
`
},

{
  id: 55,
  category: "Cloud Concepts",
  type: "match_dropdown",
  points_per_selection: true,

  question_es: `
<div class="question-note">
Para cada afirmación, selecciona “Sí” si la afirmación es verdadera. De lo contrario, selecciona “No”.
</div>

<div style="margin-top:16px; font-weight:700;">
NOTA: Cada selección correcta vale un punto.
</div>
`,

  matches: [
    {
      left: "Una solución Platform as a Service (PaaS) proporciona control total sobre los sistemas operativos que alojan las aplicaciones.",
      options: ["Sí", "No"],
      correct: "No"
    },
    {
      left: "Una solución Platform as a Service (PaaS) proporciona memoria adicional a las aplicaciones cambiando los niveles de precios.",
      options: ["Sí", "No"],
      correct: "No"
    },
    {
      left: "Una solución Platform as a Service (PaaS) puede escalar automáticamente el número de instancias.",
      options: ["Sí", "No"],
      correct: "Sí"
    }
  ],

  explanation_es: `
<strong>Box 1: No -</strong><br>
En una solución Platform as a Service (PaaS), el proveedor de nube administra el sistema operativo y la infraestructura subyacente. El usuario no tiene control total sobre los sistemas operativos.

<br><br>

<strong>Box 2: No -</strong><br>
Cambiar el nivel de precios puede modificar recursos disponibles como CPU, almacenamiento o rendimiento, pero no significa automáticamente agregar memoria a las aplicaciones de forma directa.

<br><br>

<strong>Box 3: Sí -</strong><br>
Las soluciones PaaS pueden escalar automáticamente el número de instancias según la demanda de la aplicación, permitiendo ajustar recursos sin intervención manual.
`
},

{
  id: 56,
  category: "Cloud Concepts",
  type: "multiple",

  question_es: `
<div class="question-note">
Selecciona las dos opciones correctas.
</div>

Tu empresa tiene una red local con múltiples servidores.<br><br>

La empresa planea reducir las siguientes responsabilidades administrativas:

<ul>
  <li>Realizar copias de seguridad de los datos de aplicaciones.</li>  
  <li>Reemplazar hardware de servidores averiados.</li>  
  <li>Administrar la seguridad física de los servidores.</li>    
  <li>Actualizar sistemas operativos de servidores.</li>    
  <li>Administrar permisos de documentos compartidos.</li>    
</ul>

La empresa planea migrar los servidores a Azure Virtual Machines.<br>

¿Qué dos responsabilidades administrativas se eliminarán después de la migración?
`,

  options_es: [
    "Reemplazar hardware de servidores averiados",
    "Realizar copias de seguridad de los datos de aplicaciones",
    "Administrar la seguridad física de los servidores",
    "Actualizar sistemas operativos de servidores",
    "Administrar permisos de documentos compartidos"
  ],

  correct: [0, 2],

explanation_es: `
Las responsabilidades que se eliminan son reemplazar hardware de servidores averiados y administrar la seguridad física de los servidores.

<br><br>

Azure Virtual Machines se ejecuta sobre infraestructura física administrada por Microsoft. Microsoft es responsable del hardware físico, el reemplazo de componentes averiados y la seguridad física de los centros de datos.

<br><br>

Las demás responsabilidades siguen siendo responsabilidad del cliente:

<ul>
  <li>Las copias de seguridad de aplicaciones siguen siendo responsabilidad del usuario.</li>
  <li>El sistema operativo de las máquinas virtuales debe seguir siendo administrado y actualizado por el cliente.</li>
  <li>Los permisos de documentos compartidos también continúan siendo administrados por la organización.</li>
</ul>
`
},

{
  id: 57,
  category: "Cloud Concepts",
  type: "match_dropdown",
  points_per_selection: true,

  question_es: `
<div class="question-note">
Para cada afirmación, selecciona “Sí” si la afirmación es verdadera. De lo contrario, selecciona “No”.
</div>

<div class="question-note">
<strong>NOTA:</strong> Cada selección correcta vale un punto.
</div>
`,

  matches: [
    {
      left: "El modelo de precios Pay-As-You-Go de Azure es un ejemplo de CapEx.",
      options: ["Sí", "No"],
      correct: "No"
    },
    {
      left: "Pagar la electricidad de un centro de datos es un ejemplo de OpEx.",
      options: ["Sí", "No"],
      correct: "No"
    },
    {
      left: "Implementar tu propio centro de datos es un ejemplo de CapEx.",
      options: ["Sí", "No"],
      correct: "Sí"
    }
  ],

  explanation_es: `
Uno de los cambios más importantes al pasar de infraestructura local a la nube pública es el cambio de gastos de capital (CapEx) a gastos operativos (OpEx).

<br><br>

<strong>Box 1: No -</strong><br>
Con el modelo Pay-As-You-Go, se paga únicamente por los servicios utilizados. Esto corresponde a OpEx (gasto operativo), no a CapEx (gasto de capital). CapEx implica inversiones iniciales importantes, por ejemplo la compra de servidores físicos.

<br><br>

<strong>Box 2: No -</strong><br>
Pagar la electricidad de un centro de datos propio normalmente se considera parte de los costos de infraestructura física asociados al centro de datos y no representa un ejemplo típico de OpEx en el contexto de la nube pública.

<br><br>

<strong>Box 3: Sí -</strong><br>
Implementar tu propio centro de datos es un ejemplo de CapEx porque requiere comprar infraestructura física, hardware y equipamiento antes de comenzar a utilizarlo.
`
},

{
  id: 58,
  category: "Cloud Concepts",
  type: "single",

  question_es: `
<div class="question-note">
Selecciona la opción correcta.
</div>

Planeas aprovisionar recursos de Infrastructure as a Service (IaaS) en Azure. ¿Cuál de los siguientes recursos es un ejemplo de IaaS?
`,

  options_es: [
    "Una aplicación web de Azure",
    "Una máquina virtual de Azure",
    "Una Logic App de Azure",
    "Una base de datos Azure SQL"
  ],

  correct: [1],

  explanation_es: `
Una máquina virtual de Azure es un ejemplo de Infrastructure as a Service (IaaS).

En IaaS, el proveedor de nube administra la infraestructura física, mientras que el cliente administra el sistema operativo, las aplicaciones y la configuración de la máquina virtual.

Las demás opciones corresponden a Platform as a Service (PaaS):

<ul>
  <li>Azure Web App es un servicio PaaS para hospedar aplicaciones web.</li>
  <li>Azure Logic Apps es un servicio PaaS para automatización e integración de procesos.</li>
  <li>Azure SQL Database es una base de datos administrada como servicio PaaS.</li>
</ul>
`
},

{
  id: 59,
  category: "Cloud Concepts",
  type: "single",

  question_es: `
<div class="question-note">
Selecciona la opción correcta.
</div>

¿En qué modelos de nube puedes implementar servidores físicos?
`,

  options_es: [
    "Solo en nube privada y nube híbrida",
    "Solo en nube privada",
    "Nube privada, nube híbrida y nube pública",
    "Solo en nube híbrida"
  ],

  correct: [0],

  explanation_es: `
En una nube privada es posible implementar servidores físicos porque la infraestructura se encuentra en las instalaciones de la organización.<br>

En una nube híbrida también es posible utilizar servidores físicos locales, ya que combina recursos locales con recursos de nube pública.<br><br>

Las demás opciones son incorrectas porque:

<ul>
  <li>La nube pública no permite que los clientes implementen servidores físicos propios dentro de la infraestructura del proveedor de nube.</li>
  <li>La nube híbrida no es el único modelo que permite usar servidores físicos, ya que la nube privada también lo permite.</li>
`
},

{
  id: 60,
  category: "Cloud Concepts",
  type: "match",
  points_per_selection: true,

  question_es: `
<div class="question-note">
Relaciona cada modelo de nube con su ventaja correcta.
</div>

<div class="question-note">
<strong>NOTA:</strong> Cada relación correcta vale un punto.
</div>
`,

  matches: [
    {
      left: "No requiere gasto de capital (CapEx).",
      options: [
        "Nube híbrida",
        "Nube privada",
        "Nube pública"
      ],
      correct: "Nube pública"
    },
    {
      left: "Proporciona control total sobre la seguridad.",
      options: [
        "Nube híbrida",
        "Nube privada",
        "Nube pública"
      ],
      correct: "Nube privada"
    },
    {
      left: "Permite elegir entre recursos locales o basados en la nube.",
      options: [
        "Nube híbrida",
        "Nube privada",
        "Nube pública"
      ],
      correct: "Nube híbrida"
    }
  ],

  explanation_es: `
<strong>Box 1: Nube pública -</strong><br>
En una nube pública no es necesario realizar inversiones iniciales importantes en hardware o infraestructura. Solo se paga por los recursos utilizados según el consumo.

<br><br>

<strong>Box 2: Nube privada -</strong><br>
La nube privada se ejecuta en infraestructura controlada por la propia organización, lo que permite tener un control completo sobre la seguridad y las configuraciones internas.

<br><br>

<strong>Box 3: Nube híbrida -</strong><br>
La nube híbrida combina recursos locales con recursos de nube pública. Esto permite elegir cuándo utilizar infraestructura local y cuándo utilizar recursos en la nube.
`
},


 ];