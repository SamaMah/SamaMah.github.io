---
layout: default
title: Concept Art
permalink: /conceptart/
thumbnail: https://cdnb.artstation.com/p/assets/covers/images/083/857/235/smaller_square/oussama-m-oussama-m-icon-sets.jpg?1736953373
order: 2
---

<!-- Pre-render project data for JavaScript -->
<script>
  window.projectData = [
    {% for project in site.projects %}
      {
        title: {{ project.title | jsonify }},
        thumbnail: {{ project.thumbnail | jsonify }},
        content_html: {{ project.content | markdownify | strip_newlines | jsonify }},
        images: {{ project.images | jsonify }}
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];
</script>

<div class="container py-5">
  <h1 class="mb-5 text-center">Concept Art Projects</h1>
  <div class="row g-4">
    {% for project in site.projects %}
      <div class="col-6 col-md-4 col-lg-3">
        <div class="card h-100 border-0 shadow-sm" role="button"
             data-bs-toggle="modal" data-bs-target="#projectModal"
             onclick="loadModal({{ forloop.index0 }})">
          <img src="{{ project.thumbnail }}" class="card-img-top" alt="{{ project.title }}" style="aspect-ratio: 1 / 1; object-fit: cover;">
          <div class="card-body text-center">
            <h6 class="card-title mb-0">{{ project.title }}</h6>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
  <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content border-0">
      <div class="modal-body" id="modalBody">
        <!-- Content gets loaded here -->
      </div>
      <div class="sticky-top">
        <h5 class="modal-title fw-bold" id="modalTitle">Project Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    </div>
  </div>
</div>

