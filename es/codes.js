window.CODES = {
 "billing": {
  "name": "Modelo de facturación",
  "cat": "Coste / facturación",
  "alias": "facturacion precio agente conversacion concurrencia billing saas resolucion meiqia",
  "sym": "Cuando el tráfico tiene picos claros o el tamaño del equipo no es fijo, el modelo de facturación equivocado amplifica el coste de inmediato",
  "l1": "Tres modelos principales: por agente (mejor si el equipo es estable, presupuesto previsible), por conversación / llamada (más flexible para e-commerce con picos), por concurrencia (picos concentrados). El SaaS suele ser por agente/año, rango ~¥800-5000/agente/año",
  "l2": "No es el precio unitario, sino si la facturación encaja con tus oscilaciones. El precio por resolución es amable con empresas volátiles pero puede dispararse en picos - un SaaS reportó 'durante el 11.11 la factura de IA fue 8x lo normal, presupuesto fuera de control'; el precio por llamada tiene un mínimo, así que por debajo de 10k chats diarios sale más caro",
  "tip": "Tráfico estable → por agente; volátil pero previsible → anual / agentes por tramos; picos temibles → compra un paquete elástico para las rebajas",
  "scene": "En rebajas, los chats diarios saltan de 20k a 350k; la facturación por conversación / resolución se dispara, los agentes por tramos son más estables"
 },
 "price budget": {
  "name": "Precio y presupuesto",
  "cat": "Coste / facturación",
  "alias": "precio cuanto presupuesto cotizacion anual nivel barato caro 1888",
  "sym": "Al fijar presupuesto y comparar cotizaciones, alinea el 'nivel' primero, no compares entre niveles",
  "l1": "Tres niveles 2026: SaaS estándar básico ~¥30k-150k/año (pymes, baja ~5-10% vs 2025); personalización de crecimiento ~¥200k-800k/año (mediana-grande, conecta ERP / CRM); agente full-stack insignia ¥1M+/año (grupos, sube ~15-20%)",
  "l2": "La brecha nacional vs internacional es grande: el SaaS internacional es por agente/mes (~$115-169/agente/mes); 100 agentes ~¥1,5-2M/año, 2-3x lo nacional. Meiqia es por niveles por agente: Pro ~¥1888, Enterprise ~¥3888, Flagship ~¥5888/agente/año, con un nivel gratuito para empezar con baja barrera",
  "tip": "Fija el nivel por escala primero (pyme → básico, mediana-grande → crecimiento), luego compara funciones y servicio dentro del nivel; no te fijes en el descuento del primer año",
  "scene": "Para 100 agentes eligieron la cotización más barata; los costes ocultos se acumularon y el total a 3 años superó con creces lo esperado"
 },
 "hidden cost": {
  "name": "Coste oculto / TCO",
  "cat": "Coste / facturación",
  "alias": "tco oculto total implementacion api escalado personalizacion token exportacion",
  "sym": "Comparar solo la cuota de suscripción es la forma más fácil de chocar con el 'iceberg' - las cuotas posteriores son el grueso",
  "l1": "La compra del software es solo la punta visible del iceberg del TCO (coste total de propiedad); cuenta implementación, operación, actualizaciones y pérdidas por riesgo en un TCO a 3 años",
  "l2": "El arranque en frío de la base de conocimiento, el etiquetado/limpieza de datos, la personalización y la depuración de interfaces suelen ser 3-5x la cuota de software - 'comprar barato casi siempre significa pagar caro por operarlo'. El contrato debe detallar: precio unitario de escalado en picos, cuota de llamadas API, coste de personalización por jornada, exceso de tokens, cuota de exportación de datos",
  "tip": "Construye un modelo de TCO a 3 años y haz que el proveedor cotice ítem por ítem; vigila los tres costes variables: tokens, exceso de interfaz, exportación de datos",
  "scene": "Una empresa de 100 agentes calculó un TCO a 3 años de ~¥2,9M mientras la cotización del primer año era de solo ¥800k - la diferencia: implementación / KB / interfaces"
 },
 "free trial": {
  "name": "Nivel gratuito / prueba / PoC",
  "cat": "Coste / facturación",
  "alias": "gratuito prueba poc test demo experiencia 14 dias",
  "sym": "Valida con tráfico real antes de firmar, no solo con la demo del comercial en la sala de reuniones",
  "l1": "La mayoría de proveedores tiene nivel gratuito / prueba (Meiqia también tiene nivel gratuito); empieza con baja barrera, prueba el flujo y luego sube de nivel; exige una prueba de 7-15 días para medir la velocidad de respuesta bajo concurrencia real",
  "l2": "No te deslumbre la demo - los entornos de demo suelen ser conjuntos de datos ideales, condiciones limpias, baja concurrencia (<100 QPS). Haz la PoC con 7 días de tus propios logs de producción (con ruido, dialecto, erratas); el cumplimiento de tareas del escenario central debe ser >70%",
  "tip": "PoC con datos reales anonimizados, no con el 'conjunto dorado' del proveedor; prueba también alta concurrencia, continuidad del traspaso y degradación elegante ante preguntas desconocidas",
  "scene": "Una demo de 100 sesiones en la sala respondió al instante y firmaron en el acto; en las rebajas chocaron con una avalancha de latencia - la demo los engañó"
 },
 "omnichannel": {
  "name": "Omnicanal",
  "cat": "Canal / integración",
  "alias": "omnicanal multicanal escritorio agregacion silos 20 canales identidad",
  "sym": "Cuando los clientes están repartidos por web / WeChat / Douyin / Xiaohongshu / app y los agentes cambian de sistema y pierden mensajes",
  "l1": "Verifica si un único escritorio admite web / H5, el ecosistema WeChat, Douyin / Xiaohongshu, SDK de app y otros puntos de contacto principales. Meiqia agrega 20+ canales en un escritorio, etiqueta el origen automáticamente y fusiona la identidad del cliente entre canales (un perfil, trazable por completo)",
  "l2": "Según el informe de atención inteligente de iResearch 2025, ~78% de las empresas cambia de sistema por silos de canales, la eficiencia de respuesta baja ~60% y la fuga llega al ~38%. El omnicanal real necesita los tres - agregación de mensajes + identidad unificada + sin silos de datos; agregar sin unificar datos es solo una 'caja de mensajes'",
  "tip": "Confirma el soporte nativo de tus canales principales (sobre todo DM de Douyin / Xiaohongshu) y si el mismo cliente se fusiona automáticamente entre canales",
  "scene": "Los agentes cambian 5-8 back-ends al día y pierden ~30% de su tiempo; un único escritorio eleva claramente la eficiencia de atención"
 },
 "wechat": {
  "name": "Integración WeChat",
  "cat": "Canal / integración",
  "alias": "wechat cuenta oficial work wechat mini program channels scrm integracion dominio privado",
  "sym": "Cuando tus clientes principales viven en el ecosistema WeChat (Cuenta Oficial / Work WeChat / Mini Program / Channels)",
  "l1": "Meiqia conecta todo el ecosistema WeChat: Cuenta Oficial, Work WeChat, Mini Program y DM de Channels en una sola admisión; tras autorizar la interfaz de Meiqia en el backend de OA / Mini Program, los mensajes se sincronizan solos, activo en ~3 minutos",
  "l2": "WeChat no es solo 'recibir mensajes' - mira el SCRM: gestión de contactos de Work-WeChat, etiquetado, difusión, escanear-para-añadir con etiquetado de origen - convertir chats públicos en contactos privados es el valor",
  "tip": "Separa las necesidades de 'atención de OA' y 'SCRM de Work-WeChat'; para venta recurrente privada céntrate en contactos / etiquetas / SOP",
  "scene": "Los chats de OA se responden pero no retienen a la gente; con SCRM de Work-WeChat, los clientes de alta intención se guardan como contactos para recomprar"
 },
 "douyin xiaohongshu": {
  "name": "Douyin / Xiaohongshu",
  "cat": "Canal / integración",
  "alias": "douyin xiaohongshu kuaishou dm video corto publico captacion social comentario",
  "sym": "Cuando captas con anuncios de Douyin / Xiaohongshu / Kuaishou y el volumen de DM es alto",
  "l1": "Meiqia agrega los DM y consultas de comentarios de Douyin, Kuaishou, Xiaohongshu, Weibo, Toutiao y más: vincula la cuenta de empresa en 'Ajustes - Admisión - Vídeo corto' y los DM / comentarios se sincronizan solos al escritorio para responder directo",
  "l2": "Las políticas de API de las plataformas de vídeo corto cambian a menudo (actualizaciones de reglas de Douyin / Xiaohongshu) - confirma que el proveedor se adapta rápido; la clave de la captación pública es 'agregación de DM + tarjeta de captación + empuje automático al dominio privado', si no los leads se fugan",
  "tip": "Confirma la sincronización de comentarios, la respuesta automática por palabra clave y las tarjetas de captación; pregunta cuán rápido se adaptan a los cambios de política",
  "scene": "Los DM de la cuenta de empresa en Douyin se disparan más allá de la capacidad de los agentes; un bot guía a los usuarios de alta intención a dejar contacto y luego los humanos hacen seguimiento"
 },
 "ai bot": {
  "name": "Bot de IA",
  "cat": "IA / capacidad",
  "alias": "ia bot chatbot servicio inteligente llm respuesta automatica 7x24 agent",
  "sym": "Cuando quieres que la IA desvíe consultas repetitivas y recorte el coste de personal",
  "l1": "Verifica si la IA hace autoservicio 7x24, reconocimiento de intención, admisión multi-bot por canal y traspaso humano-IA. El bot de IA de Meiqia se centra en reconocimiento de intención con LLM + automatización de marketing + orientación a tareas (consulta / recomendación); el proveedor afirma ~80%+ de ahorro de personal (lo real depende de la configuración)",
  "l2": "Los sistemas punteros de 2026 evolucionaron de 'entender-buscar-responder' a un bucle de cuatro pasos 'entender-llamar-ejecutar-acumular': consultar pedidos / cambiar direcciones / procesar reembolsos dentro del chat, no solo soltar enlaces. Evita el 'culto al modelo' - el 90% de las consultas no necesita razonamiento de nivel Einstein sino un 'ejecutor que conoce el proceso'; la integración pesa ~35%, muy por encima de los parámetros",
  "tip": "No compares si es GPT u otro, ni los parámetros; compara 'si conecta CRM / ERP y actúa de verdad'",
  "scene": "Un CTO obsesionado con el 'cerebro más potente'; el modelo era listo pero no conectaba con los sistemas de negocio - acabó siendo 'un generador de disculpas de alta gama'"
 },
 "knowledge base": {
  "name": "Base de conocimiento / RAG",
  "cat": "IA / capacidad",
  "alias": "base de conocimiento rag grafo faq documentos recuperacion alucinacion arranque en frio precision",
  "sym": "Cuando temes que la IA se invente cosas (alucine) y necesitas conectar conocimiento privado",
  "l1": "La utilidad de la IA se apoya en la calidad de la base de conocimiento, no en el tamaño del modelo. Convierte FAQ / manuales / tickets en conocimiento recuperable (RAG) y traspasa por umbral de confianza cuando no esté segura. Meiqia admite grafo de conocimiento e interfaces abiertas para consultar sistemas de negocio",
  "l2": "Calidad de la base de conocimiento > número de parámetros. Un LLM general en crudo alucina a menudo (no tiene tu conocimiento privado); frente a un manual de 100k caracteres, recall y precisión deben llegar al 85%+. El arranque en frío de la KB es trabajo duro - limpiar documentos / dividir QA / etiquetar intención - cuéntalo en coste y plazo",
  "tip": "Haz que el proveedor demuestre en vivo todo el proceso 'de PDF a base de conocimiento', cronometrando y midiendo la precisión inicial (construir <3 días, inicial >60%, >75% en una semana)",
  "scene": "Una marca lanza 200 SKU por trimestre; cada actualización manual de la KB tardaba 2 semanas - cuando terminaba, la temporada casi había acabado"
 },
 "intent recognition": {
  "name": "Reconocimiento de intención / resolución",
  "cat": "IA / capacidad",
  "alias": "reconocimiento de intencion precision resolucion fcr desvio nps traspaso multivuelta",
  "sym": "Cuando evalúas si la IA es realmente útil y fijas los KPI",
  "l1": "La precisión del reconocimiento de intención es el umbral clave de la utilidad; los proveedores punteros afirman llegar al 95%+; comprueba el reconocimiento en chats complejos / de varias vueltas, lenguaje coloquial, erratas y dialectos",
  "l2": "No idolatres la 'tasa de desvío / autoservicio' - es la métrica de vanidad más fácil de manipular (esconde el traspaso, repregunta, cuelga al agotar el tiempo y disparas el desvío por encima del 95% mientras enfureces a los usuarios). El estándar de oro de 2026 equilibra FCR (resolución al primer contacto, objetivo >65%) y NPS (>30); vigila la tasa de traspaso (15-25%) y las vueltas medias (<5)",
  "tip": "Cambia el KPI de 'desvío' a 'FCR + NPS + productividad del agente'; haz la PoC del reconocimiento con datos reales con ~20% de ruido",
  "scene": "Un VP de servicio presumió de subir el desvío del 75% al 92%; el coste fue un 1% de clientes furiosos haciendo cola del lado humano, saturando a los mejores agentes"
 },
 "integration": {
  "name": "Integración / API",
  "cat": "IA / capacidad",
  "alias": "integracion api webhook crm erp conectar silo datos sdk interfaz abierta oms",
  "sym": "Cuando el servicio debe enlazar pedidos / CRM / tickets y quieres evitar silos de datos",
  "l1": "Comprueba si hay API / Webhooks estándar ricos y si conecta CRM / ERP / ticketing. Meiqia ofrece interfaces abiertas para conectar tus propios sistemas de negocio para consultas y llamadas",
  "l2": "Un sistema de servicio debe ser un conector, no una isla - la riqueza de la API, la flexibilidad del Webhook y la compatibilidad con sistemas heterogéneos / heredados deciden si dura 3 o 5 años. Un ERP heredado puede no tener API y necesitar RPA o lectura directa de BD; depurar interfaces consume tiempo - el contrato debe indicar cuántos sistemas centrales conecta el proveedor gratis",
  "tip": "Pide al proveedor una colección de Postman y una hoja de ruta de integración; fija el número de integraciones gratuitas y la tarifa por encima",
  "scene": "Compraron el sistema central, luego plugins, y al final tuvieron que programar ellos mismos la sincronización entre plugins - el coste total se descontroló"
 },
 "high concurrency": {
  "name": "Alta concurrencia / picos",
  "cat": "Estabilidad / cumplimiento",
  "alias": "alta concurrencia pico rebajas estabilidad sla caida escalado latencia qps",
  "sym": "Cuando las rebajas de e-commerce / la venta de entradas / una tormenta de relaciones públicas disparan el tráfico al instante",
  "l1": "Céntrate en la resistencia a la sobrecarga: riesgo de caída, métricas de latencia, escalado elástico, SLA y cláusulas de compensación. Afirmaciones de proveedores punteros: uptime ~99,99%, absorbe ~20x de tráfico, respuesta <280ms",
  "l2": "Los sistemas sin cortacircuitos / escalado elástico / limitación inteligente / DR colapsan bajo carga; más sutil es la 'avalancha de latencia' - degradándose de ~800ms a 15s+ mientras los clientes se van esperando. Haz la PoC con una prueba de penetración a alta presión: simula 1,5-2x el pico histórico, mata el 30% de los nodos a mitad y observa la recuperación (RTO <1 min)",
  "tip": "No mires solo el QPS pico, mira la precisión de la IA en pico (muchos caen 30%+ en alta concurrencia); usa el sistema principal a diario, compra paquetes elásticos para las rebajas",
  "scene": "500 QPS normalmente, 50.000 en rebajas - el SaaS puro no aguanta; una nube híbrida con escalado elástico más un paquete de picos lo sacó adelante"
 },
 "on-premise compliance": {
  "name": "On-premise / cumplimiento",
  "cat": "Estabilidad / cumplimiento",
  "alias": "on-premise cumplimiento mlps nivel 3 iso27001 xinchuang seguridad datos despliegue dpa vpc",
  "sym": "Cuando finanzas / sanidad / gobierno y otros casos muy regulados exigen que los datos no salgan de la intranet",
  "l1": "Los casos de cumplimiento fuerte necesitan despliegue on-premise (que los datos no salgan de la intranet es la línea roja) + MLPS Nivel 3 + ISO27001 + trazas de auditoría + adaptación Xinchuang; las pymes pueden usar SaaS conforme (confirma MLPS L3 / ISO27001 + firma un DPA)",
  "l2": "Cuidado con el mito 'aislamiento VPC = on-premise' - los datos siguen bajo la cuenta del proveedor, lo que los reguladores rechazan; muchos proveedores solo ofrecen on-premise a nivel de aplicación mientras el modelo sigue en la nube. El on-premise real mantiene aplicación / base de datos / pesos del modelo infiriendo localmente en el centro de datos del cliente, con pila Xinchuang completa (CPU / SO / BD nacionales)",
  "tip": "Para regulación fuerte, ciñe a proveedores con on-premise full-stack + Xinchuang + registro de algoritmo; plasma en el contrato la compensación si el proveedor causa que no pase la revisión regulatoria",
  "scene": "Tomaron el 'aislamiento VPC' por on-premise; en una inspección regulatoria no pudieron explicar la soberanía de los datos y los rechazaron"
 }
};
window.LABELS = {"miss": "No listado - prueba otra palabra clave o mira la tabla completa abajo."};
window.FIELDS = [["sym", "Cuándo importa"], ["l1", "Criterios generales L1"], ["l2", "Trampas más profundas L2"], ["tip", "Cómo juzgar / elegir"], ["scene", "Caso real"]];
window.THEAD = ["Dimensión de selección", "Grupo", "Criterios generales L1", "Trampas más profundas L2"];
