---
layout: default
title: Graphic Design
permalink: /graphicdesign/
thumbnail: /assets/img/thumbnails/graphicdesign_01.jpg
order: 6
---

<section class="gallery">
  {% assign gallery_path = "/gallery/gdesign" %}
  {% assign images = site.static_files | where_exp: "file", "file.path contains gallery_path" %}
  {% assign sorted_images = images | sort: "name" %}

  {% assign video_exts = "mp4,webm,ogg" | split: "," %}

  {% for file in sorted_images %}
    {% assign ext = file.name | split:'.' | last | downcase %}
    <div class="gallery-item">
      {% if video_exts contains ext %}
        <video class="lazy-video" controls preload="metadata" poster="/assets/img/video-poster.jpg" width="640" height="360">
          <source data-src="{{ file.path | relative_url }}" type="video/{{ ext }}">
          Your browser does not support the video tag.
        </video>
      {% else %}
        <img src="{{ file.path | relative_url }}"
             alt="{{ file.name | split: '-' | slice: 1, 10 | join: ' ' | split: '.' | first | capitalize }}">
      {% endif %}
    </div>
  {% endfor %}
</section>