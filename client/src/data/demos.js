import {
  ChatBubbleLeftRightIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

// Every live demo has a `kind`; this sets its tab label, icon and default subtitle.
export const demoKinds = {
  chat: { label: 'Chat IA', icon: ChatBubbleLeftRightIcon },
  quote: { label: 'Cotización', icon: DocumentTextIcon, channel: 'Cotizador automático · IA' },
  app: { label: 'App', icon: DevicePhoneMobileIcon, channel: 'App móvil · iOS y Android' },
  crm: { label: 'CRM', icon: UserGroupIcon, channel: 'CRM · Seguimiento automático' },
  cloud: { label: 'Nube', icon: CloudIcon, channel: 'Nube · Tiempo real' },
};

// Live demos beyond the WhatsApp-style chat, per industry slug.
//   quote: request → line items → total → sent
//   app:   fields fill in → button tap → confirmation
//   crm:   the card moves through `columns` following `moves`
//   cloud: `sources` sync → `metrics` and chart → `alert`
export const extraDemos = {
  maquiladora: [
    {
      kind: 'cloud',
      sources: ['Línea 1', 'Línea 2', 'Línea 3', 'Cámaras de calidad'],
      metrics: [['Piezas hoy', '12,480'], ['OEE', '84%'], ['Scrap', '1.4%']],
      alert: 'Línea 2: paro de 12 minutos sin causa registrada. Se pidió el motivo al supervisor.',
    },
    {
      kind: 'app',
      screen: 'Checklist de arranque · Línea 3',
      fields: [['Supervisor', 'Ana Torres'], ['Herramental', 'Verificado ✓'], ['Primera pieza', 'Aprobada ✓'], ['Foto de evidencia', 'Adjunta ✓']],
      button: 'Liberar línea',
      done: ['Línea 3 liberada', 'El arranque quedó registrado en la nube a las 6:04 a. m.'],
    },
    {
      kind: 'quote',
      from: 'compras@autopartesnorte.mx',
      request: 'Cotización para ensamblar 5,000 arneses modelo AX-20 al mes.',
      doc: 'Cotización MQ-0412',
      client: 'Autopartes del Norte',
      items: [['Mano de obra · 5,000 pzas', '$185,000'], ['Pruebas eléctricas al 100%', '$22,500'], ['Empaque y etiquetado', '$9,500']],
      total: ['Total mensual + IVA', '$217,000'],
      sent: 'PDF enviado y registrado en el CRM.',
    },
  ],
  fabricante: [
    {
      kind: 'crm',
      columns: ['Cotizado', 'Producción', 'Embarque', 'Entregado'],
      card: { title: 'Constructora Delta', value: 'OF-4471 · $20,940' },
      moves: [
        { col: 0, log: 'Cotización aprobada por WhatsApp' },
        { col: 1, log: 'OF-4471 en corte láser' },
        { col: 2, log: 'Embarque programado; cliente avisado' },
        { col: 3, log: 'Entregado con firma de recibido' },
      ],
    },
    {
      kind: 'cloud',
      sources: ['Láser 1', 'Plegadora', 'Robot de soldadura', 'Almacén de lámina'],
      metrics: [['Utilización', '78%'], ['Órdenes activas', '23'], ['Lámina A36', '12.4 t']],
      alert: 'Plegadora: vibración 18% arriba de lo normal. Mantenimiento sugerido antes del viernes.',
    },
    {
      kind: 'app',
      screen: 'Avance · OF-4471',
      fields: [['Corte láser', 'Terminado ✓'], ['Doblez', 'Terminado ✓'], ['Pintura', 'En proceso'], ['Fotos', '6 adjuntas']],
      button: 'Avisar al cliente',
      done: ['Cliente avisado', 'Constructora Delta recibió el avance con fotos por WhatsApp.'],
    },
  ],
  mayorista: [
    {
      kind: 'quote',
      from: 'compras@farmaciaslaluz.mx',
      request: 'Cotización: 120 paquetes de toallas húmedas, 60 cajas de cubrebocas y 30 garrafas de alcohol de 20 L.',
      doc: 'Cotización COT-2394',
      client: 'Farmacias La Luz',
      items: [['120 × Toallas húmedas 80 pzas', '$5,880'], ['60 × Cubrebocas caja 50', '$4,500'], ['30 × Alcohol 70% 20 L', '$13,500']],
      total: ['Total + IVA', '$23,880'],
      sent: 'PDF enviado en 2 minutos con la lista de precios del cliente.',
    },
    {
      kind: 'app',
      screen: 'Pedido en ruta',
      fields: [['Cliente', 'Abarrotes Lupita'], ['Aceite 1 L × 24', '$1,032'], ['Arroz 1 kg × 20', '$540'], ['Crédito disponible', '$8,400']],
      button: 'Enviar pedido · $1,572',
      done: ['Pedido enviado', 'Llegó al almacén y se apartó el inventario, aunque no había señal.'],
    },
    {
      kind: 'crm',
      columns: ['Nuevo', 'Cotizado', 'Seguimiento', 'Ganado'],
      card: { title: 'Farmacias La Luz', value: '$23,880' },
      moves: [
        { col: 0, log: 'Solicitud recibida por correo' },
        { col: 1, log: 'Cotización COT-2394 enviada' },
        { col: 2, log: 'Seguimiento automático a las 48 h' },
        { col: 3, log: 'Pedido confirmado y facturado' },
      ],
    },
  ],
  abarrotes: [
    {
      kind: 'app',
      screen: 'Cobrar',
      fields: [['Coca-Cola 600 ml × 2', '$40'], ['Sabritas', '$21'], ['Pan blanco', '$48'], ['Pago', 'Fiado · Don Luis']],
      button: 'Cobrar $109',
      done: ['Venta registrada', 'La cuenta de Don Luis quedó en $420.'],
    },
    {
      kind: 'cloud',
      sources: ['Caja', 'Pedidos por WhatsApp', 'Proveedores', 'Respaldo'],
      metrics: [['Ventas hoy', '$6,840'], ['Ganancia', '$1,510'], ['Fiado total', '$3,260']],
      alert: 'En 2 días se acaban huevo, tortilla y leche. Pedido listo para tu proveedor.',
    },
    {
      kind: 'crm',
      columns: ['Al corriente', 'Por cobrar', 'Recordado', 'Pagado'],
      card: { title: 'Don Luis', value: '$420' },
      moves: [
        { col: 0, log: 'Compra a cuenta registrada' },
        { col: 1, log: 'Saldo del mes: $420' },
        { col: 2, log: 'Recordatorio amable por WhatsApp' },
        { col: 3, log: 'Pagó en efectivo; cuenta en cero' },
      ],
    },
  ],
  'tienda-de-ropa': [
    {
      kind: 'cloud',
      sources: ['Sucursal Centro', 'Sucursal Norte', 'Tienda en línea', 'Instagram'],
      metrics: [['Ventas hoy', '$38,450'], ['Prendas vendidas', '74'], ['Más vendido', 'Vestido verde']],
      alert: 'Vestido verde talla M: quedan 2 en Centro. Traspaso sugerido desde Norte.',
    },
    {
      kind: 'app',
      screen: 'Mi Boutique',
      fields: [['Apartado', 'Vestido verde · M'], ['Precio', '$899'], ['Cupón', '−15% aplicado'], ['Puntos', '+76']],
      button: 'Pagar $764',
      done: ['¡Listo, Ana!', 'Te avisaremos cuando lleguen novedades en tu talla.'],
    },
    {
      kind: 'crm',
      columns: ['Compró', 'Novedad', 'Mensaje', 'Regresó'],
      card: { title: 'Ana López', value: 'Talla M · vestidos' },
      moves: [
        { col: 0, log: 'Compra: vestido verde $899' },
        { col: 1, log: 'Llegó colección nueva en su talla' },
        { col: 2, log: 'WhatsApp personalizado con fotos' },
        { col: 3, log: 'Nueva compra: $1,250' },
      ],
    },
  ],
  muebleria: [
    {
      kind: 'app',
      screen: 'Ver en mi sala',
      fields: [['Modelo', 'Sala Milán 3-2-1'], ['Color', 'Gris Oxford'], ['Realidad aumentada', 'Colocada ✓'], ['Crédito', '32 abonos de $450']],
      button: 'Solicitar crédito',
      done: ['Solicitud enviada', 'Te respondemos en minutos con la aprobación.'],
    },
    {
      kind: 'crm',
      columns: ['Solicitud', 'Aprobado', 'Entregado', 'Al corriente'],
      card: { title: 'Carlos Méndez', value: 'Sala Milán · $14,400' },
      moves: [
        { col: 0, log: 'Solicitud de crédito desde la app' },
        { col: 1, log: 'Crédito aprobado en 15 minutos' },
        { col: 2, log: 'Entrega con foto de evidencia' },
        { col: 3, log: 'Abonos puntuales: 18 de 32' },
      ],
    },
    {
      kind: 'cloud',
      sources: ['Ruta 1', 'Ruta 2', 'Almacén', 'Cobranza'],
      metrics: [['Entregas hoy', '14'], ['Cobrado hoy', '$22,950'], ['Cartera vencida', '4.2%']],
      alert: 'Ruta 2: el cliente no estaba. Reagendado para mañana a las 10:00 a. m. con aviso por WhatsApp.',
    },
  ],
  ferreteria: [
    {
      kind: 'quote',
      from: 'Ing. Salazar · WhatsApp',
      request: 'Material de baño para 6 departamentos: tubería, conexiones y llaves.',
      doc: 'Cotización FE-1520',
      client: 'Construcciones Salazar',
      items: [['Tubo CPVC 1/2" × 60', '$5,940'], ['Conexiones y codos', '$3,480'], ['Llaves angulares × 12', '$1,740'], ['Descuento contratista 8%', '−$893']],
      total: ['Total + IVA', '$10,267'],
      sent: 'Enviada por WhatsApp con precio de contratista.',
    },
    {
      kind: 'cloud',
      sources: ['Sucursal Juárez', 'Sucursal Centro', 'Bodega', 'Punto de venta'],
      metrics: [['Productos activos', '8,412'], ['Ventas hoy', '$52,180'], ['Diferencias', '0.3%']],
      alert: 'Llave angular 1/2": quedan 3 en Juárez. Pedido sugerido al proveedor: 50 piezas.',
    },
    {
      kind: 'app',
      screen: 'Mostrador',
      fields: [['Búsqueda', '“pija para tablaroca”'], ['Resultado', 'Pija 6 × 1" · Pasillo 4'], ['Existencia', '1,850 pzas'], ['Cantidad', '200 pzas · $160']],
      button: 'Cobrar $160',
      done: ['Venta registrada', 'El inventario se actualizó en todas las sucursales.'],
    },
  ],
  hotel: [
    {
      kind: 'app',
      screen: 'Reservar',
      fields: [['Fechas', '14 – 16 nov'], ['Huéspedes', '2 adultos'], ['Habitación', 'Vista al Mar'], ['Extra', 'Traslado aeropuerto']],
      button: 'Pagar $4,850',
      done: ['¡Reservación confirmada!', 'Haz check-in desde la app el día de tu llegada.'],
    },
    {
      kind: 'cloud',
      sources: ['Sitio web', 'App del hotel', 'Agencias en línea', 'Recepción'],
      metrics: [['Ocupación hoy', '86%'], ['Reservas directas', '62%'], ['Tarifa promedio', '$2,180']],
      alert: 'Fin de semana largo: quedan 4 habitaciones. Tarifa ajustada en todos los canales.',
    },
    {
      kind: 'crm',
      columns: ['Hospedado', 'Reseña', 'Oferta', 'Regresó'],
      card: { title: 'Familia Ortega', value: 'Aniversario · nov' },
      moves: [
        { col: 0, log: 'Check-out con calificación de 5★' },
        { col: 1, log: 'Reseña publicada en Google' },
        { col: 2, log: 'Oferta de aniversario enviada' },
        { col: 3, log: 'Reservaron otra vez, directo' },
      ],
    },
  ],
  restaurante: [
    {
      kind: 'app',
      screen: 'Pantalla de cocina',
      fields: [['#318 · Para llevar', '2 pastor, 1 gringas'], ['#319 · Mesa 4', '3 enchiladas suizas'], ['#320 · Domicilio', '1 pozole grande'], ['#318', 'Listo ✓']],
      button: 'Avisar al cliente',
      done: ['Cliente avisado', 'Juan recibió “Tu pedido está listo” por WhatsApp.'],
    },
    {
      kind: 'cloud',
      sources: ['Caja', 'WhatsApp', 'App propia', 'Apps de reparto'],
      metrics: [['Ventas hoy', '$28,640'], ['Ticket promedio', '$312'], ['Platillo estrella', 'Pastor']],
      alert: 'Hora pico en 30 minutos: se sugiere preparar 4 kg más de pastor.',
    },
    {
      kind: 'crm',
      columns: ['Primera vez', 'Frecuente', 'Promoción', 'Regresó'],
      card: { title: 'Juan Pérez', value: '12 pedidos' },
      moves: [
        { col: 0, log: 'Primer pedido por WhatsApp' },
        { col: 1, log: 'Ya es cliente frecuente' },
        { col: 2, log: 'Martes de 2×1 para frecuentes' },
        { col: 3, log: 'Pidió otra vez: $360' },
      ],
    },
  ],
  medico: [
    {
      kind: 'app',
      screen: 'Agendar cita',
      fields: [['Especialidad', 'Dermatología'], ['Médico', 'Dra. Ruiz'], ['Horario', 'Jueves 10:30'], ['Pago', 'En línea · $900']],
      button: 'Confirmar cita',
      done: ['Cita confirmada', 'Te enviaremos un recordatorio 24 horas antes.'],
    },
    {
      kind: 'cloud',
      sources: ['Consultorio 1', 'Consultorio 2', 'Laboratorio', 'Recepción'],
      metrics: [['Citas hoy', '34'], ['Inasistencias', '3%'], ['Expedientes', '2,418']],
      alert: 'Resultados de laboratorio de Laura G. listos y agregados a su expediente.',
    },
    {
      kind: 'crm',
      columns: ['Consulta', 'Tratamiento', 'Control', 'Alta'],
      card: { title: 'Laura Gómez', value: 'Dermatología' },
      moves: [
        { col: 0, log: 'Consulta inicial registrada' },
        { col: 1, log: 'Receta enviada a su app' },
        { col: 2, log: 'Recordatorio de control a 30 días' },
        { col: 3, log: 'Alta y encuesta de satisfacción' },
      ],
    },
  ],
  abogado: [
    {
      kind: 'crm',
      columns: ['Nuevo', 'En trámite', 'Audiencia', 'Concluido'],
      card: { title: 'Grupo Norte', value: 'Arrendamiento' },
      moves: [
        { col: 0, log: 'Asunto abierto con documentos' },
        { col: 1, log: 'Aviso de terminación enviado' },
        { col: 2, log: 'Audiencia 12 dic · alerta a 5 días' },
        { col: 3, log: 'Convenio firmado' },
      ],
    },
    {
      kind: 'cloud',
      sources: ['Expedientes', 'Correo del despacho', 'Juzgados', 'Agenda'],
      metrics: [['Asuntos activos', '148'], ['Plazos esta semana', '9'], ['Horas facturables', '312 h']],
      alert: 'El plazo para contestar la demanda Ruiz vs. Textiles MX vence en 3 días. Responsable: Lic. Torres.',
    },
    {
      kind: 'app',
      screen: 'Mi asunto',
      fields: [['Asunto', 'Terminación de arrendamiento'], ['Estatus', 'Aviso enviado ✓'], ['Siguiente paso', 'Firma de convenio'], ['Documentos', '4 disponibles']],
      button: 'Agendar llamada',
      done: ['Llamada agendada', 'El Lic. Torres te llamará el martes a las 11:00 a. m.'],
    },
  ],
  gobierno: [
    {
      kind: 'app',
      screen: 'Reportar',
      fields: [['Tipo', 'Bache'], ['Ubicación', 'Av. Juárez 210 📍'], ['Foto', 'Adjunta ✓'], ['Detalle', 'Bache de 1 m, carril derecho']],
      button: 'Enviar reporte',
      done: ['Folio BA-2026-11420', 'Te avisaremos cuando la cuadrilla lo atienda.'],
    },
    {
      kind: 'cloud',
      sources: ['WhatsApp oficial', 'App ciudadana', 'Ventanilla', 'Cuadrillas'],
      metrics: [['Reportes del mes', '1,284'], ['Atendidos', '91%'], ['Tiempo promedio', '2.4 días']],
      alert: 'La colonia Centro concentra 38% de los reportes de alumbrado. Se sugiere revisar el circuito.',
    },
    {
      kind: 'crm',
      columns: ['Recibido', 'Asignado', 'En atención', 'Resuelto'],
      card: { title: 'AL-2026-08812', value: 'Alumbrado' },
      moves: [
        { col: 0, log: 'Reporte con foto y ubicación' },
        { col: 1, log: 'Asignado a cuadrilla zona centro' },
        { col: 2, log: 'Técnico en sitio' },
        { col: 3, log: 'Resuelto; ciudadano notificado' },
      ],
    },
  ],
  turismo: [
    {
      kind: 'app',
      screen: 'Mi viaje',
      fields: [['Tour', 'Cascadas Full-Day'], ['Salida', 'Sábado · 7:00 a. m.'], ['Punto de encuentro', 'Plaza principal 📍'], ['Boletos', '4 códigos QR']],
      button: 'Ver itinerario',
      done: ['¡Todo listo!', 'Te avisaremos si cambia el clima o el horario.'],
    },
    {
      kind: 'cloud',
      sources: ['WhatsApp', 'Sitio web', 'Agencias', 'Guías'],
      metrics: [['Cupos sábado', '26 / 32'], ['Ventas semana', '$148,600'], ['Idiomas', '4']],
      alert: 'La salida del sábado casi se llena: se abrió una segunda camioneta y se avisó a los guías.',
    },
    {
      kind: 'crm',
      columns: ['Viajó', 'Reseña', 'Oferta', 'Reservó'],
      card: { title: 'Emily y amigos', value: '4 personas' },
      moves: [
        { col: 0, log: 'Tour completado' },
        { col: 1, log: 'Reseña de 5★ en Google' },
        { col: 2, log: 'Oferta: tour de cenotes −10%' },
        { col: 3, log: 'Reservaron cenotes: $5,040' },
      ],
    },
  ],
  inmobiliaria: [
    {
      kind: 'crm',
      columns: ['Prospecto', 'Calificado', 'Visita', 'Apartado'],
      card: { title: 'Daniel Ríos', value: 'Casa en Lomas' },
      moves: [
        { col: 0, log: 'Llegó desde un portal inmobiliario' },
        { col: 1, log: 'Infonavit + ahorro: precalificado' },
        { col: 2, log: 'Visita el sábado con Mariana' },
        { col: 3, log: 'Apartado con $50,000' },
      ],
    },
    {
      kind: 'app',
      screen: 'Agenda de Mariana',
      fields: [['10:00', 'Depto. Centro · Sofía M.'], ['11:00', 'Casa en Lomas · Daniel R.'], ['13:00', 'Terreno Norte · Iván P.'], ['Ruta', 'Optimizada · 18 km']],
      button: 'Iniciar recorrido',
      done: ['¡Buen día, Mariana!', 'Cada prospecto recibirá aviso cuando vayas en camino.'],
    },
    {
      kind: 'cloud',
      sources: ['Sitio web', 'Portal 1', 'Portal 2', 'Redes sociales'],
      metrics: [['Propiedades', '64'], ['Prospectos hoy', '37'], ['Visitas agendadas', '12']],
      alert: 'Casa en Lomas apartada: se retiró automáticamente de todos los portales.',
    },
  ],
  escuela: [
    {
      kind: 'app',
      screen: 'App de padres',
      fields: [['Matemáticas', '9.2'], ['Tarea', 'Entregada ✓'], ['Aviso', 'Junta viernes 8:00 a. m.'], ['Colegiatura', 'Noviembre · $3,800']],
      button: 'Pagar $3,800',
      done: ['Pago recibido', 'Tu recibo y factura llegaron a tu correo.'],
    },
    {
      kind: 'crm',
      columns: ['Interesado', 'Visita', 'Examen', 'Inscrito'],
      card: { title: 'Familia Herrera', value: 'Secundaria' },
      moves: [
        { col: 0, log: 'Preguntó por WhatsApp' },
        { col: 1, log: 'Visita al plantel el martes' },
        { col: 2, log: 'Examen diagnóstico aprobado' },
        { col: 3, log: 'Inscripción pagada' },
      ],
    },
    {
      kind: 'cloud',
      sources: ['Control escolar', 'Pagos en línea', 'App de padres', 'Caja'],
      metrics: [['Alumnos', '842'], ['Al corriente', '94%'], ['Avisos leídos', '88%']],
      alert: '17 colegiaturas vencen mañana. Se envió un recordatorio amable a cada familia.',
    },
  ],
  contador: [
    {
      kind: 'cloud',
      sources: ['SAT · XML', 'Bancos', 'Correo de clientes', 'Sistema contable'],
      metrics: [['Clientes', '86'], ['Facturas leídas hoy', '1,932'], ['Cierres listos', '71%']],
      alert: '9 clientes tienen depósitos sin factura. Recordatorios enviados con fecha límite.',
    },
    {
      kind: 'crm',
      columns: ['Documentos', 'Conciliado', 'Declaración', 'Presentada'],
      card: { title: 'Comercial del Bajío', value: 'Septiembre' },
      moves: [
        { col: 0, log: '214 facturas leídas' },
        { col: 1, log: '96% de movimientos conciliados' },
        { col: 2, log: 'Declaración preparada' },
        { col: 3, log: 'Presentada; acuse enviado' },
      ],
    },
    {
      kind: 'app',
      screen: 'Portal del cliente',
      fields: [['Mes', 'Septiembre'], ['Faltan', '3 facturas de depósitos'], ['Subir', 'Foto o XML ✓'], ['Declaración', 'Vence el día 17']],
      button: 'Enviar documentos',
      done: ['Documentos recibidos', 'Tu contador ya puede cerrar septiembre.'],
    },
  ],
  farmacia: [
    {
      kind: 'cloud',
      sources: ['Sucursal 1', 'Sucursal 2', 'Almacén', 'Pedidos a domicilio'],
      metrics: [['Ventas hoy', '$41,280'], ['Por caducar', '38 lotes'], ['Merma del mes', '0.6%']],
      alert: 'El lote L-2291 de amoxicilina caduca en 45 días: se sugiere moverlo a Sucursal 2.',
    },
    {
      kind: 'app',
      screen: 'Mi farmacia',
      fields: [['Receta', 'Foto enviada ✓'], ['Validación', 'Farmacéutico ✓'], ['Entrega', 'Hoy 6–7 p. m.'], ['Puntos', '+96']],
      button: 'Confirmar pedido',
      done: ['Pedido en camino', 'Te avisamos cuando el repartidor esté cerca.'],
    },
    {
      kind: 'crm',
      columns: ['Compra', 'Por terminar', 'Recordado', 'Resurtido'],
      card: { title: 'Sra. Elena', value: 'Metformina 850 mg' },
      moves: [
        { col: 0, log: 'Compra de 30 tabletas' },
        { col: 1, log: 'Se termina en 3 días' },
        { col: 2, log: 'Recordatorio por WhatsApp' },
        { col: 3, log: 'Resurtido a domicilio' },
      ],
    },
  ],
  'taller-mecanico': [
    {
      kind: 'app',
      screen: 'Orden OT-1187',
      fields: [['Vehículo', 'Versa 2019 · 84,200 km'], ['Diagnóstico', 'Balatas al 10%'], ['Fotos', '4 adjuntas ✓'], ['Refacciones', 'En existencia ✓']],
      button: 'Enviar cotización',
      done: ['Cotización enviada', 'Jorge la recibió por WhatsApp con fotos.'],
    },
    {
      kind: 'crm',
      columns: ['Recepción', 'Autorizado', 'Reparación', 'Entregado'],
      card: { title: 'Jorge · Versa 2019', value: '$2,200' },
      moves: [
        { col: 0, log: 'Recepción con fotos del auto' },
        { col: 1, log: 'Autorizó desde WhatsApp' },
        { col: 2, log: 'Reparación en bahía 2' },
        { col: 3, log: 'Entregado; próximo servicio en marzo' },
      ],
    },
    {
      kind: 'cloud',
      sources: ['Bahías', 'Refacciones', 'Proveedores', 'Caja'],
      metrics: [['Autos en taller', '11'], ['Ventas semana', '$64,900'], ['Por pedir', '6 refacciones']],
      alert: 'Balatas delanteras Versa: quedan 2 juegos. Pedido sugerido al proveedor.',
    },
  ],
  logistica: [
    {
      kind: 'app',
      screen: 'Ruta de hoy · Unidad 14',
      fields: [['Entrega 3 de 8', 'Ferretería Juárez'], ['Llegada', '2:55 p. m.'], ['Firma', 'Capturada ✓'], ['Foto', 'Adjunta ✓']],
      button: 'Cerrar entrega',
      done: ['Entrega cerrada', 'El cliente recibió la evidencia al instante.'],
    },
    {
      kind: 'cloud',
      sources: ['Unidad 14', 'Unidad 22', 'Unidad 31', 'Almacén'],
      metrics: [['Entregas hoy', '186'], ['A tiempo', '96%'], ['Km ahorrados', '412']],
      alert: 'Unidad 22: tráfico en Av. Constitución. Nueva ruta enviada y clientes avisados.',
    },
    {
      kind: 'quote',
      from: 'logistica@electrodistribuciones.mx',
      request: 'Flete de 8 tarimas de Monterrey a Guadalajara, recolección el lunes.',
      doc: 'Cotización FL-0388',
      client: 'Electro Distribuciones',
      items: [['Flete MTY → GDL · 8 tarimas', '$18,500'], ['Maniobras de carga', '$1,200'], ['Seguro de mercancía', '$1,850']],
      total: ['Total + IVA', '$21,550'],
      sent: 'PDF enviado y recolección apartada para el lunes.',
    },
  ],
  constructora: [
    {
      kind: 'app',
      screen: 'Bitácora · Residencial Alameda',
      fields: [['Frente', 'Losa nivel 3'], ['Avance', 'Colado 100% ✓'], ['Cuadrilla', '12 personas'], ['Fotos', '8 adjuntas ✓']],
      button: 'Guardar en bitácora',
      done: ['Bitácora actualizada', 'El avance ya está en el reporte semanal.'],
    },
    {
      kind: 'cloud',
      sources: ['Obra Alameda', 'Obra Pinos', 'Almacén', 'Compras'],
      metrics: [['Avance Alameda', '64%'], ['Presupuesto ejercido', '58%'], ['Acero en almacén', '6.2 t']],
      alert: 'Obra Pinos: consumo de cemento 12% arriba de lo presupuestado. Revisión sugerida.',
    },
    {
      kind: 'crm',
      columns: ['Estimación', 'Revisión', 'Aprobada', 'Pagada'],
      card: { title: 'Estimación 7', value: '$1,240,000' },
      moves: [
        { col: 0, log: 'Generada con avance y fotos' },
        { col: 1, log: 'Enviada al Ing. Ramírez' },
        { col: 2, log: 'Aprobada por el cliente' },
        { col: 3, log: 'Pago recibido' },
      ],
    },
  ],
};
