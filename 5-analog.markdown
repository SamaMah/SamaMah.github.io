---
layout: default
title: Other
permalink: /other/
thumbnail: /assets/img/thumbnails/other_01.jpg
projects_data: "projects"
order: 6
---

<section class="gallery">
  {% assign gallery_path = "/gallery/other" %}
  {% assign images = site.static_files | where_exp: "file", "file.path contains gallery_path" %}
  {% assign sorted_images = images | sort: "name" %}

  {% for file in sorted_images %}
    <div class="gallery-item">
      <img src="{{ file.path | relative_url }}"
           alt="{{ file.name | split: '-' | slice: 1, 10 | join: ' ' | split: '.' | first | capitalize }}">
    </div>
  {% endfor %}