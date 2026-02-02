import React from 'react'

export default function MapEmbed({ query, lat, lng, width = '100%', height = 240, zoom = 14, className }) {
  const src = lat != null && lng != null
    ? `https://www.google.com/maps?q=${encodeURIComponent(`${lat},${lng}`)}&z=${zoom}&output=embed`
    : `https://www.google.com/maps?q=${encodeURIComponent(query || '')}&z=${zoom}&output=embed`

  return (
    <div style={{ width }}>
      <iframe
        title="map"
        src={src}
        width="100%"
        height={height}
        style={{ border: 0, borderRadius: 8 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={className}
      />
    </div>
  )
}