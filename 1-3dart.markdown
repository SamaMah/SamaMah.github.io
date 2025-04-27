---
layout: default
title: 3D Art
permalink: /3d-art/
thumbnail: /assets/img/thumbnails/digitalart_01.jpg
projects_data: "projects"
order: 2
---

<section class="gallery">
  {% for item in site.data.gallery3d %}
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

<!-- Modal -->
<div class="modal" id="modal">
  <div class="modal-content" id="modal-content"></div>
</div>