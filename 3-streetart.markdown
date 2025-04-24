---
layout: page
title: Street Art
permalink: /streetart/
order: 3
---

<div class="streetart-gallery">
  {% for piece in site.data.streetart %}
    <div class="gallery-item">
      <img src="{{ piece.image | relative_url }}" alt="{{ piece.title }}">
      <h3>{{ piece.title }}</h3>
      <p>{{ piece.description }}</p>
    </div>
  {% endfor %}
</div>