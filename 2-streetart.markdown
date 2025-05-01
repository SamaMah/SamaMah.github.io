---
layout: default
title: Street Art
permalink: /streetart/
thumbnail: /assets/img/thumbnails/graffity_01.jpg
order: 3
---

<section class="gallery">
  {% assign gallery_path = "/gallery/streetart" %}
  {% assign images = site.static_files | where_exp: "file", "file.path contains gallery_path" %}
  {% assign sorted_images = images | sort: "name" %}

  {% for file in sorted_images %}
    <div class="gallery-item">
      <img src="{{ file.path | relative_url }}"
           alt="{{ file.name | split: '-' | slice: 1, 10 | join: ' ' | split: '.' | first | capitalize }}">
    </div>
  {% endfor %}
</section>