function firePixel(pixelId, callback) {
    const SUPABASE_URL = 'https://mbpgtshsopranuwnmuvh.supabase.co';
    const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1icGd0c2hzb3ByYW51d25tdXZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3MTE2MDksImV4cCI6MjA2NzI4NzYwOX0.RxbW_ug92pdP1PiZ2N3Hf1xsgp_f-cSl8Vtf8rLaXss';
    const today = new Date().toISOString().split('T')[0];

    fetch(`${SUPABASE_URL}/rest/v1/pixel_clicks?pixel_id=eq.${pixelId}&date=eq.${today}`, {
        headers: {
            apikey: SUPABASE_API_KEY,
            Authorization: `Bearer ${SUPABASE_API_KEY}`,
            'Content-Type': 'application/json',
            Prefer: 'return=representation'
        }
    })
    .then(res => res.json())
    .then(rows => {
        if (rows.length > 0) {
            fetch(`${SUPABASE_URL}/rest/v1/pixel_clicks?id=eq.${rows[0].id}`, {
                method: 'PATCH',
                headers: {
                    apikey: SUPABASE_API_KEY,
                    Authorization: `Bearer ${SUPABASE_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ count: rows[0].count + 1 })
            }).then(() => callback && callback());
        } else {
            fetch(`${SUPABASE_URL}/rest/v1/pixel_clicks`, {
                method: 'POST',
                headers: {
                    apikey: SUPABASE_API_KEY,
                    Authorization: `Bearer ${SUPABASE_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ pixel_id: pixelId, date: today, count: 1 })
            }).then(() => callback && callback());
        }
    });
}

function downloadFile() {
    firePixel('rummyse_download', function() {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = "https://renew.sabkagame.com/download/rummyse/rummyse_14182384.apk";
        document.body.appendChild(iframe);
    });
}
