/* Participant-facing copy. Cantonese is written in Traditional Chinese for Hong Kong. */
window.SCAMCHECK_I18N = {
  vi: {
    htmlLang: "vi",
    languageLabel: "Ngôn ngữ",
    ui: {
      studyTasks: "Các nhiệm vụ", statusIcons: "Sóng di động, Wi-Fi, pin", metaDescription: "Bản mẫu ScamCheck dùng để kiểm tra khả năng sử dụng.",
      prototype: "BẢN MẪU", introTab: "Giới thiệu", introTitle: "Phần giới thiệu", task: "Nhiệm vụ",
      context: "BỐI CẢNH", introStep: "GIỚI THIỆU", deliveryStep: "TIN NHẮN GIAO HÀNG",
      phonePreview: "Màn hình iPhone xem trước", messages: "Tin nhắn", textMessage: "Tin nhắn văn bản",
      videoCall: "Gọi video", today: "Hôm nay", am: "SA", previous: "Trước", nextExample: "Ví dụ tiếp theo",
      done: "Xong", example: "Ví dụ", of: "trong", revealTruth: "Tiết lộ đáp án", hideTruth: "Ẩn đáp án",
      groundTruth: "Đáp án:", scam: "Lừa đảo", legitimate: "Hợp pháp", copy: "Sao chép tin nhắn",
      sampleOnly: "Đây chỉ là tin nhắn mẫu. ScamCheck sẽ không trả lời hoặc liên hệ với người gửi.",
      openScamCheck: "Mở ScamCheck", addAttachment: "Thêm tệp đính kèm", audioMessage: "Tin nhắn thoại",
      checkMessage: "Kiểm tra tin nhắn", checkSubtitle: "Phân tích tin nhắn đáng ngờ mà không cần trả lời.",
      pastePlaceholder: "Dán tin nhắn vào đây…", privacy: "ScamCheck sẽ không trả lời hoặc liên hệ với người gửi.",
      paste: "Dán", analyze: "Phân tích tin nhắn", backMessages: "‹ Quay lại Tin nhắn",
      resultTitle: "Kết quả phân tích", explainWhy: "Giải thích lý do", nextSteps: "Bước tiếp theo", learn: "Tìm hiểu",
      whatDo: "Tôi nên làm gì?", remember: "Ghi nhớ lần sau", backResult: "‹ Quay lại kết quả",
      messageCopied: "Đã sao chép tin nhắn", messagePasted: "Đã dán tin nhắn",
      footer: "ScamCheck là bản mẫu. Ứng dụng chỉ phân tích tin nhắn mẫu hiển thị ở đây."
    },
    examples: [
      { context: "Bạn đang chờ một gói hàng trong tuần này. Hôm qua, bạn đã kiểm tra trang theo dõi trên USPS.com và bật thông báo qua tin nhắn.", text: "USPS: Dự kiến giao hàng vào thứ Ba, ngày 18 tháng 11. Trả lời STOP để hủy." },
      { context: "Bạn đã đặt hàng trực tuyến đầu tuần này. Bạn biết hàng đã được gửi nhưng không nhớ đơn vị vận chuyển nào sẽ giao.", text: "UPS: Chúng tôi không thể xác minh địa chỉ giao hàng cho gói hàng của bạn. Vui lòng xác nhận địa chỉ trước 8 giờ tối nay để tránh giao hàng chậm trễ: ups-delivery-status.com" },
      { context: "Bạn đang chờ một gói hàng Amazon hôm nay.", text: "Amazon: Việc giao hàng của bạn đã bị tạm dừng vì không thể xác nhận địa chỉ. Hôm nay bạn cần thanh toán phí giao lại 1,49 đô la. Cập nhật thông tin giao hàng tại đây: amazon-delivery-help.com" },
      { context: "Bạn đã đặt hàng trực tuyến đầu tuần này. Bạn biết hàng đã được gửi nhưng không nhớ đơn vị vận chuyển nào sẽ giao.", text: "UPS: Gói hàng của bạn dự kiến được giao vào ngày mai. Theo dõi hoặc quản lý việc giao hàng tại https://www.ups.com/track." },
      { context: "Bạn đã đặt hàng trên Amazon hai ngày trước và dự kiến hôm nay hàng sẽ đến.", text: "Amazon: Gói hàng của bạn đang được giao. Hãy theo dõi đơn hàng trong ứng dụng Amazon để xem thông tin mới nhất." },
      { context: "Bạn đã đặt hàng từ một cửa hàng trực tuyến nhỏ đầu tuần này nhưng không nhớ đơn vị vận chuyển nào sẽ giao.", text: "USPS: Chúng tôi không thể giao hàng vì không xác minh được số nhà trong địa chỉ giao hàng của bạn. Vui lòng xác nhận địa chỉ giao hàng: usps-address-check.com" }
    ],
    tasks: {
      task1: {
        result: "Có khả năng là lừa đảo", subtitle: "Tin nhắn có những dấu hiệu cảnh báo lừa đảo phổ biến.",
        indicators: [["Thúc giục hành động nhanh", "Tin nhắn yêu cầu bạn trả lời trước 8 giờ tối."], ["Liên kết đáng ngờ", "Liên kết không dùng tên miền chính thức ups.com."], ["Yêu cầu thông tin cá nhân", "Tin nhắn yêu cầu bạn xác nhận địa chỉ giao hàng qua liên kết." ]],
        explainTitle: "Vì sao tin nhắn này đáng ngờ", explanation: [["Tạo cảm giác khẩn cấp", "Tin nhắn đặt thời hạn, có thể khiến bạn vội làm theo trước khi kiểm tra kỹ."], ["Liên kết đáng ngờ", "Liên kết chính thức của UPS dùng tên miền ups.com. Trang web trong tin nhắn này thì không."], ["Yêu cầu thông tin", "Tin nhắn hướng bạn đến một trang web khác để xác nhận địa chỉ giao hàng."]],
        steps: [["Đừng trả lời hoặc mở liên kết", ""], ["Tự kiểm tra riêng", "Mở ứng dụng UPS hoặc tự nhập ups.com vào trình duyệt."], ["Kiểm tra lô hàng", "Tra cứu gói hàng trên trang UPS chính thức hoặc tại cửa hàng bạn đã mua."], ["Xóa hoặc báo cáo", "Nếu tin nhắn là giả mạo, hãy xóa hoặc báo cáo tin nhắn."]],
        learn: [["Thúc giục hành động nhanh", "Tin nhắn lừa đảo thường đặt thời hạn hoặc dọa hậu quả để khiến mọi người hành động thiếu cân nhắc."], ["Liên kết không khớp với công ty", "Hãy kiểm tra địa chỉ trang web thực tế, đừng chỉ nhìn tên công ty được ghi trong tin nhắn."], ["Yêu cầu thông tin cá nhân", "Hãy cẩn trọng nếu tin nhắn giao hàng yêu cầu bạn nhập địa chỉ, thông tin thanh toán, mật khẩu hoặc dữ liệu cá nhân khác."]],
        reinforcement: "Bạn đang học cách nhận biết tin nhắn lừa đảo về giao hàng."
      },
      task2: {
        result: "Có khả năng là hợp pháp", subtitle: "Chúng tôi không tìm thấy dấu hiệu lừa đảo phổ biến trong tin nhắn này.",
        indicators: [["Trang web chính thức", "Liên kết dùng tên miền chính thức ups.com."], ["Không yêu cầu thông tin nhạy cảm", "Tin nhắn không yêu cầu mật khẩu, thông tin thanh toán hoặc dữ liệu nhạy cảm khác."], ["Không có dấu hiệu thúc ép bất thường", "Tin nhắn thông báo giao hàng bình thường, không đe dọa hậu quả ngay lập tức."]],
        explainTitle: "Vì sao tin nhắn này có vẻ hợp pháp", explanation: [["Trang web UPS chính thức", "Liên kết dẫn đến tên miền chính thức ups.com."], ["Không gây áp lực phải hành động nhanh", "Tin nhắn cập nhật giao hàng mà không đưa ra thời hạn mang tính đe dọa."], ["Không yêu cầu thông tin nhạy cảm", "Tin nhắn không yêu cầu mật khẩu, thông tin thanh toán, số An sinh Xã hội hoặc dữ liệu nhạy cảm khác."]],
        steps: [["Bạn không cần trả lời tin nhắn này", ""], ["Tự xác minh nếu chưa chắc", "Mở ứng dụng UPS hoặc tự nhập ups.com vào trình duyệt."], ["Kiểm tra gói hàng", "Xác nhận thông tin giao hàng trong tài khoản UPS hoặc với cửa hàng bán hàng."], ["Tránh rủi ro không cần thiết", "Nếu chưa chắc về liên kết, hãy tự mở ứng dụng hoặc trang web chính thức của công ty."]],
        learn: [["Trang web chính thức", "Kiểm tra xem trang web có thực sự thuộc về công ty hay không."], ["Không gây áp lực", "Thông báo giao hàng bình thường thường không đe dọa để buộc bạn hành động ngay."], ["Không yêu cầu thông tin nhạy cảm", "Thông báo giao hàng thường không cần mật khẩu hoặc thông tin tài chính qua tin nhắn."]],
        reinforcement: "Bạn đang học cách nhận biết tin nhắn an toàn hơn."
      },
      task3: {
        result: "Có khả năng là lừa đảo", subtitle: "Tin nhắn có những dấu hiệu cảnh báo lừa đảo phổ biến.",
        indicators: [["Liên kết đáng ngờ", "Trang web không dùng tên miền chính thức của USPS."], ["Yêu cầu thông tin cá nhân", "Tin nhắn yêu cầu bạn xác nhận địa chỉ giao hàng trên một trang web khác."], ["Yêu cầu giao hàng bất thường", "Tin nhắn yêu cầu bạn sửa thông tin qua liên kết thay vì xác minh qua kênh USPS chính thức."]],
        explainTitle: "Vì sao tin nhắn này đáng ngờ", explanation: [["Trang web đáng ngờ", "Liên kết không dẫn đến trang web USPS chính thức."], ["Yêu cầu địa chỉ", "Tin nhắn yêu cầu bạn nhập hoặc xác nhận thông tin giao hàng cá nhân."], ["Không giống thông báo theo dõi của USPS", "Thông báo theo dõi qua tin nhắn của USPS do khách hàng chủ động đăng ký và thường không kèm liên kết yêu cầu sửa thông tin giao hàng."]],
        steps: [["Đừng trả lời hoặc mở liên kết", ""], ["Truy cập trực tiếp USPS", "Tự nhập usps.com vào trình duyệt."], ["Kiểm tra thông tin theo dõi", "Dùng mã theo dõi hoặc trang đơn hàng của cửa hàng để kiểm tra lô hàng."], ["Xóa hoặc báo cáo", "Xóa hoặc báo cáo tin nhắn đáng ngờ."]],
        learn: [["Kiểm tra chính xác địa chỉ web", "Tên công ty xuất hiện trong địa chỉ trang web không có nghĩa trang web đó thực sự thuộc về công ty."], ["Cẩn thận với vấn đề giao hàng", "Tin nhắn nói bạn cần sửa địa chỉ, phí bưu chính hoặc thông tin giao hàng thường là dấu hiệu lừa đảo."], ["Tự xác minh riêng", "Dùng trang web hoặc ứng dụng chính thức của đơn vị vận chuyển thay vì mở liên kết trong tin nhắn."]],
        reinforcement: "Bạn đang học cách nhận biết tin nhắn lừa đảo."
      }
    }
  },
  es: {
    htmlLang: "es",
    languageLabel: "Idioma",
    ui: {
      studyTasks: "Tareas del estudio", statusIcons: "Señal celular, Wi-Fi y batería", metaDescription: "Prototipo de usabilidad de ScamCheck.",
      prototype: "PROTOTIPO", introTab: "Inicio", introTitle: "Introducción", task: "Tarea",
      context: "CONTEXTO", introStep: "INTRODUCCIÓN", deliveryStep: "MENSAJE DE ENTREGA",
      phonePreview: "Vista previa del iPhone", messages: "Mensajes", textMessage: "Mensaje de texto",
      videoCall: "Videollamada", today: "Hoy", am: "a. m.", previous: "Anterior", nextExample: "Siguiente ejemplo",
      done: "Listo", example: "Ejemplo", of: "de", revealTruth: "Revelar respuesta", hideTruth: "Ocultar respuesta",
      groundTruth: "Respuesta correcta:", scam: "Estafa", legitimate: "Legítimo", copy: "Copiar mensaje",
      sampleOnly: "Este es solo un mensaje de muestra. ScamCheck no responderá ni se comunicará con quien lo envió.",
      openScamCheck: "Abrir ScamCheck", addAttachment: "Agregar archivo adjunto", audioMessage: "Mensaje de audio",
      checkMessage: "Revisar un mensaje", checkSubtitle: "Analiza un mensaje sospechoso sin responder.",
      pastePlaceholder: "Pega el mensaje aquí…", privacy: "ScamCheck no responderá ni se comunicará con quien lo envió.",
      paste: "Pegar", analyze: "Analizar mensaje", backMessages: "‹ Volver a Mensajes",
      resultTitle: "Resultado del análisis", explainWhy: "Explicar por qué", nextSteps: "Próximos pasos", learn: "Aprender",
      whatDo: "¿Qué debo hacer?", remember: "Para la próxima vez", backResult: "‹ Volver al resultado",
      messageCopied: "Mensaje copiado", messagePasted: "Mensaje pegado",
      footer: "ScamCheck es un prototipo. Solo analiza el texto de muestra que aparece aquí."
    },
    examples: [
      { context: "Esperas un paquete esta semana. Ayer consultaste el seguimiento en USPS.com y activaste las notificaciones por mensaje de texto.", text: "USPS: Entrega prevista para el martes 18 de noviembre. Responde STOP para cancelar." },
      { context: "Hiciste un pedido por internet a principios de esta semana. Sabes que ya se envió, pero no recuerdas qué empresa lo entregará.", text: "UPS: No pudimos verificar la dirección de entrega de tu paquete. Confirma tu dirección antes de las 8 p. m. de hoy para evitar demoras: ups-delivery-status.com" },
      { context: "Esperas un paquete de Amazon para hoy.", text: "Amazon: La entrega de tu paquete está pausada porque no se pudo confirmar tu dirección. Hoy vence un cargo de 1,49 USD por reenvío. Actualiza los datos de entrega aquí: amazon-delivery-help.com" },
      { context: "Hiciste un pedido por internet a principios de esta semana. Sabes que ya se envió, pero no recuerdas qué empresa lo entregará.", text: "UPS: Tu paquete está programado para entregarse mañana. Sigue o administra la entrega en https://www.ups.com/track." },
      { context: "Hiciste un pedido en Amazon hace dos días y se espera que llegue hoy.", text: "Amazon: Tu paquete está en camino para su entrega. Consulta la aplicación de Amazon para ver las últimas novedades." },
      { context: "Hiciste un pedido en una tienda pequeña por internet a principios de esta semana, pero no recuerdas qué empresa lo entregará.", text: "USPS: No pudimos completar la entrega porque no se pudo verificar el número de calle de tu dirección. Confirma tu dirección de entrega: usps-address-check.com" }
    ],
    tasks: {
      task1: {
        result: "Probablemente es una estafa", subtitle: "Encontramos señales comunes de estafa.",
        indicators: [["Presión para actuar rápido", "El mensaje te pide responder antes de las 8 p. m."], ["Enlace sospechoso", "El enlace no usa el dominio oficial ups.com."], ["Pide información personal", "El mensaje te pide confirmar tu dirección de entrega mediante el enlace."]],
        explainTitle: "Por qué parece sospechoso", explanation: [["Crea urgencia", "El mensaje fija una hora límite, lo que puede presionarte para actuar antes de verificarlo con cuidado."], ["Enlace sospechoso", "Los enlaces oficiales de UPS usan el dominio ups.com. El sitio de este mensaje no lo usa."], ["Pide información", "El mensaje te dirige a otro sitio web para confirmar tu dirección de entrega."]],
        steps: [["No respondas ni abras el enlace", ""], ["Verifica por tu cuenta", "Abre la aplicación de UPS o escribe ups.com directamente en el navegador."], ["Revisa tu envío", "Busca tu paquete en el sitio oficial de UPS o en la tienda donde lo compraste."], ["Elimina o reporta", "Si el mensaje es fraudulento, elimínalo o repórtalo."]],
        learn: [["Presión para actuar rápido", "Los mensajes fraudulentos suelen poner plazos o amenazar con consecuencias para que la gente actúe sin pensar."], ["Enlaces que no coinciden con la empresa", "Revisa la dirección web completa, no solo el nombre de la empresa que aparece en el mensaje."], ["Piden información personal", "Ten cuidado si un mensaje de entrega te pide ingresar tu dirección, datos de pago, contraseñas u otra información personal."]],
        reinforcement: "Estás aprendiendo a reconocer estafas de entrega."
      },
      task2: {
        result: "Probablemente es legítimo", subtitle: "No encontramos señales comunes de estafa en este mensaje.",
        indicators: [["Sitio web oficial", "El enlace usa el dominio oficial ups.com."], ["No pide información confidencial", "El mensaje no pide contraseñas, datos de pago ni otra información confidencial."], ["Sin urgencia inusual", "El mensaje da una actualización normal de entrega sin amenazar con consecuencias inmediatas."]],
        explainTitle: "Por qué parece legítimo", explanation: [["Sitio web oficial de UPS", "El enlace lleva al dominio oficial ups.com."], ["No te presiona para actuar rápido", "El mensaje informa sobre la entrega sin imponerte un plazo amenazante."], ["No pide información confidencial", "El mensaje no pide contraseñas, datos de pago, el número de Seguro Social ni otra información confidencial."]],
        steps: [["No tienes que responder este mensaje", ""], ["Verifica si tienes dudas", "Abre la aplicación de UPS o escribe ups.com directamente en el navegador."], ["Revisa tu paquete", "Confirma los datos de entrega en tu cuenta de UPS o con la tienda."], ["Evita riesgos innecesarios", "Si tienes dudas sobre un enlace, abre por tu cuenta la aplicación o el sitio oficial de la empresa."]],
        learn: [["Sitio web oficial", "Comprueba que el sitio web realmente pertenezca a la empresa."], ["Sin presión", "Las actualizaciones normales de entrega generalmente no te amenazan para que actúes de inmediato."], ["No pide información confidencial", "Las notificaciones de entrega normalmente no deberían pedir contraseñas ni datos financieros por mensaje de texto."]],
        reinforcement: "Estás aprendiendo a reconocer mensajes más seguros."
      },
      task3: {
        result: "Probablemente es una estafa", subtitle: "Encontramos señales comunes de estafa.",
        indicators: [["Enlace sospechoso", "El sitio web no usa el dominio oficial de USPS."], ["Pide información personal", "El mensaje te pide confirmar tu dirección de entrega en otro sitio web."], ["Solicitud de entrega inusual", "El mensaje te pide corregir los datos mediante un enlace en vez de verificarlo por los canales oficiales de USPS."]],
        explainTitle: "Por qué parece sospechoso", explanation: [["Sitio web sospechoso", "El enlace no lleva a un sitio web oficial de USPS."], ["Pide la dirección", "El mensaje te pide ingresar o confirmar información personal de entrega."], ["No coincide con las alertas normales de USPS", "Las notificaciones de seguimiento por mensaje de USPS las inicia el cliente y normalmente no incluyen enlaces para corregir datos de entrega."]],
        steps: [["No respondas ni abras el enlace", ""], ["Ve directamente a USPS", "Escribe usps.com en el navegador."], ["Revisa el seguimiento", "Usa el número de seguimiento o la página del pedido de la tienda para consultar el envío."], ["Elimina o reporta", "Elimina o reporta el mensaje sospechoso."]],
        learn: [["Revisa la dirección web exacta", "Que el nombre de una empresa aparezca en una dirección web no significa que el sitio realmente le pertenezca."], ["Ten cuidado con problemas de entrega", "Los mensajes que dicen que debes corregir una dirección, el franqueo o los datos de entrega suelen ser estafas."], ["Verifica por separado", "Usa el sitio o la aplicación oficial de la empresa de mensajería en vez de abrir un enlace del mensaje."]],
        reinforcement: "Estás aprendiendo a reconocer estafas."
      }
    }
  },
  "zh-HK": {
    htmlLang: "zh-HK",
    languageLabel: "語言",
    ui: {
      studyTasks: "測試任務", statusIcons: "流動網絡訊號、Wi-Fi 及電池", metaDescription: "ScamCheck 易用性測試原型。",
      prototype: "原型", introTab: "簡介", introTitle: "簡介任務", task: "任務",
      context: "情境", introStep: "簡介", deliveryStep: "送貨短訊",
      phonePreview: "iPhone 預覽畫面", messages: "訊息", textMessage: "文字訊息",
      videoCall: "視像通話", today: "今日", am: "上午", previous: "上一個", nextExample: "下一個例子",
      done: "完成", example: "例子", of: "／", revealTruth: "顯示答案", hideTruth: "隱藏答案",
      groundTruth: "正確答案：", scam: "詐騙", legitimate: "可信", copy: "複製訊息",
      sampleOnly: "這只是示範訊息。ScamCheck 不會回覆或聯絡發訊者。",
      openScamCheck: "開啟 ScamCheck", addAttachment: "加入附件", audioMessage: "語音訊息",
      checkMessage: "檢查訊息", checkSubtitle: "分析可疑訊息，無須回覆。",
      pastePlaceholder: "在此貼上訊息…", privacy: "ScamCheck 不會回覆或聯絡發訊者。",
      paste: "貼上", analyze: "分析訊息", backMessages: "‹ 返回訊息",
      resultTitle: "分析結果", explainWhy: "解釋原因", nextSteps: "下一步", learn: "了解更多",
      whatDo: "我應該怎樣做？", remember: "下次記住", backResult: "‹ 返回結果",
      messageCopied: "已複製訊息", messagePasted: "已貼上訊息",
      footer: "ScamCheck 是原型，只會分析此處顯示的示範文字。"
    },
    examples: [
      { context: "你預計今個星期會收到包裹。昨日，你在 USPS.com 查閱了包裹追蹤頁面，並開啟了短訊通知。", text: "USPS：預計於 11 月 18 日（星期二）送達。回覆 STOP 取消。" },
      { context: "你今個星期初在網上買了東西，知道貨品已寄出，但不記得由哪間速遞公司派送。", text: "UPS：我們未能核實你包裹的送貨地址。請於今晚 8 時前確認地址，以免延誤送貨：ups-delivery-status.com" },
      { context: "你預計今日會收到一個 Amazon 包裹。", text: "Amazon：由於無法確認你的地址，包裹派送已暫停。你需要在今日支付 1.49 美元重新派送費。請在此更新送貨資料：amazon-delivery-help.com" },
      { context: "你今個星期初在網上買了東西，知道貨品已寄出，但不記得由哪間速遞公司派送。", text: "UPS：你的包裹預計明日送達。你可在 https://www.ups.com/track 追蹤或管理派送。" },
      { context: "你兩日前在 Amazon 下單，預計包裹今日送達。", text: "Amazon：你的包裹正在派送。請在 Amazon 應用程式查看最新送貨狀態。" },
      { context: "你今個星期初在一間小型網店買了東西，但不記得由哪間速遞公司派送。", text: "USPS：我們未能完成派送，因為無法核實你送貨地址的門牌號碼。請確認送貨地址：usps-address-check.com" }
    ],
    tasks: {
      task1: {
        result: "好可能係詐騙", subtitle: "我哋發現訊息有常見詐騙警號。",
        indicators: [["催促你盡快行動", "訊息要求你在晚上 8 時前回覆。"], ["可疑連結", "連結並非使用 UPS 官方網域 ups.com。"], ["索取個人資料", "訊息要求你透過連結確認送貨地址。"]],
        explainTitle: "點解呢個訊息似乎可疑", explanation: [["製造急切感", "訊息設定限時，可能令你未仔細查證就急於行動。"], ["可疑連結", "UPS 官方連結會使用 ups.com 網域，訊息內的網站並非如此。"], ["索取資料", "訊息引導你到另一個網站確認送貨地址。"]],
        steps: [["唔好回覆或開啟連結", ""], ["自行核實", "開啟 UPS 應用程式，或在瀏覽器直接輸入 ups.com。"], ["查閱貨件", "到 UPS 官方網站或你購物的商店查找包裹。"], ["刪除或舉報", "如果訊息屬詐騙，請刪除或舉報。"]],
        learn: [["催促你盡快行動", "詐騙訊息經常設定限時或威脅後果，令你未思考清楚就採取行動。"], ["連結與公司不相符", "仔細查看完整網址，不要只看訊息中提到的公司名稱。"], ["索取個人資料", "如果送貨短訊要求輸入地址、付款資料、密碼或其他個人資料，請提高警覺。"]],
        reinforcement: "你正在學習識別送貨詐騙。"
      },
      task2: {
        result: "好可能係可信訊息", subtitle: "我哋未有在此訊息中發現常見詐騙警號。",
        indicators: [["官方網站", "連結使用 UPS 官方網域 ups.com。"], ["沒有索取敏感資料", "訊息沒有索取密碼、付款資料或其他敏感資料。"], ["沒有異常催促", "訊息只提供一般送貨通知，沒有威脅即時後果。"]],
        explainTitle: "點解呢個訊息似乎可信", explanation: [["UPS 官方網站", "連結指向 UPS 官方網域 ups.com。"], ["沒有催促你即時行動", "訊息提供送貨通知，沒有設定帶有威脅的限時。"], ["沒有索取敏感資料", "訊息沒有索取密碼、付款資料、社會安全號碼或其他敏感資料。"]],
        steps: [["你毋須回覆此訊息", ""], ["如有疑問，先行核實", "開啟 UPS 應用程式，或在瀏覽器直接輸入 ups.com。"], ["查閱包裹", "在 UPS 帳戶或購物商店確認送貨資料。"], ["避免不必要風險", "如不確定連結是否安全，請自行開啟公司的官方應用程式或網站。"]],
        learn: [["官方網站", "確認網站是否真的屬於該公司。"], ["沒有施加壓力", "一般送貨通知通常不會威脅你立即採取行動。"], ["沒有索取敏感資料", "送貨通知通常不應透過短訊索取密碼或財務資料。"]],
        reinforcement: "你正在學習識別較安全的訊息。"
      },
      task3: {
        result: "好可能係詐騙", subtitle: "我哋發現訊息有常見詐騙警號。",
        indicators: [["可疑連結", "網站並非使用 USPS 官方網域。"], ["索取個人資料", "訊息要求你在另一個網站確認送貨地址。"], ["不尋常的送貨要求", "訊息要求你透過連結更正資料，而非透過 USPS 官方渠道核實。"]],
        explainTitle: "點解呢個訊息似乎可疑", explanation: [["可疑網站", "連結並非指向 USPS 官方網站。"], ["索取地址", "訊息要求你輸入或確認個人送貨資料。"], ["與 USPS 一般短訊追蹤通知不符", "USPS 短訊追蹤通知通常由客戶主動申請，亦一般不會附上要求修正送貨資料的連結。"]],
        steps: [["唔好回覆或開啟連結", ""], ["直接前往 USPS 網站", "在瀏覽器自行輸入 usps.com。"], ["查閱追蹤資料", "使用追蹤編號或商店的訂單頁面查閱貨件。"], ["刪除或舉報", "刪除或舉報可疑訊息。"]],
        learn: [["核對完整網址", "網址中出現公司名稱，不代表該網站真的屬於該公司。"], ["小心處理送貨問題", "聲稱地址、郵資或送貨資料需要修正的訊息，是常見詐騙手法。"], ["另外核實", "請使用速遞公司的官方網站或應用程式，不要點擊訊息中的連結。"]],
        reinforcement: "你正在學習識別詐騙訊息。"
      }
    }
  }
};
