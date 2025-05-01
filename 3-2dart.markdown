---
layout: default
title: Illustration
permalink: /illustration/
thumbnail: https://cdnb.artstation.com/p/assets/images/images/084/164/659/20250123200906/smaller_square/oussama-m-01mira.jpg?1737684546
projects_data: "projects"
order: 4
---

<section class="gallery">
  {% for item in site.data.gallery2d %}
    <div class="gallery-item" data-url="{{ item.url }}" data-type="{{ item.type }}">
      {% if item.type == "image" %}
        <img src="{{ item.url }}" alt="{{ item.title }}">
      {% elsif item.type == "video" %}
        <video src="{{ item.url }}" autoplay muted playsinline loop></video>
      {% endif %}
      <div class="gallery-info">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  {% endfor %}
</section>