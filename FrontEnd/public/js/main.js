window.addEventListener("DOMContentLoaded", function () {
  updateTable();
});
const deleteProject = (id) => {
  fetch(`http://localhost:3000/api/v1/projects/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (response.status === 200) {
      updateTable();
    }
  });
  updateTable();
};

document.querySelector("#formulario").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    tip_ide_id: document.querySelector("#tip_ide_id").value,
    com_cedula_ruc: document.querySelector("#com_cedula_ruc").value,
    com_apellidos_razon_social: document.querySelector(
      "#com_apellidos_razon_social"
    ).value,
    com_nombres_representante_legal: document.querySelector(
      "#com_nombres_representante_legal"
    ).value,
    com_fecha_nacimiento: document.querySelector("#com_fecha_nacimiento").value,
    com_edad: document.querySelector("#com_edad").value,
    com_lugar_origen: document.querySelector("#com_lugar_origen").value,
    com_telefono_convencional: document.querySelector(
      "#com_telefono_convencional"
    ).value,
    com_telefono_celular: document.querySelector("#com_telefono_celular").value,
    com_direccion_domicilio: document.querySelector("#com_direccion_domicilio")
      .value,
    com_ciudad: document.querySelector("#com_ciudad").value,
    com_provincia: document.querySelector("#com_provincia").value,
    com_mail: document.querySelector("#com_mail").value,
  };
  if (
    data.tip_ide_id == "" ||
    data.com_cedula_ruc == "" ||
    data.com_apellidos_razon_social == "" ||
    data.com_nombres_representante_legal == "" ||
    data.com_fecha_nacimiento == "" ||
    data.com_edad == "" ||
    data.com_lugar_origen == "" ||
    data.com_telefono_convencional == "" ||
    data.com_telefono_celular == "" ||
    data.com_direccion_domicilio == "" ||
    data.com_ciudad == "" ||
    data.com_provincia == "" ||
    data.com_mail == ""
  ) {
    alert("Todos los campos son obligatorios");
    return;
  } else {
    fetch("http://localhost:3000/api/v1/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 201) {
        updateTable();
      }
    });
    updateTable();
    alert("Registro exitoso");
    window.location.reload();

  }
});

const updateTable = () => {
  fetch("http://localhost:3000/api/v1/projects")
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const rows = data.projects;
        console.log(data);
        document.querySelector("#table").innerHTML = "";
        rows.forEach((project) => {
          document.querySelector("#table").innerHTML += `
                     <tr>
                          <td>${project.com_id}</td>
                          <td>${project.tip_ide_id}</td>
                          <td>${project.com_cedula_ruc}</td>
                          <td>${project.com_apellidos_razon_social}</td>
                          <td>${project.com_nombres_representante_legal}</td>
                          <td>${project.com_fecha_nacimiento}</td>
                          <td>${project.com_edad}</td>
                          <td>${project.com_lugar_origen}</td>
                          <td>${project.com_telefono_convencional}</td>
                          <td>${project.com_telefono_celular}</td>
                          <td>${project.com_direccion_domicilio}</td>
                          <td>${project.com_ciudad}</td>
                          <td>${project.com_provincia}</td>
                          <td>${project.com_mail}</td>
                          <td>
                            <button
                              type="button"
                              onclick(editModal(${project.com_id}))
                              class="btn btn-success end text-center"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal${project.com_id}"
                            >
                              Editar
                            </button>
                          </td>
                          <td>
                            <button class="btn btn-danger" onclick="deleteProject(${project.com_id})">Eliminar</button>

                          </td>
                     </tr>
                     `;
          document.querySelector("#edicion").innerHTML += ` 
                <div
                class="modal fade"
                id="exampleModal${project.com_id}"
                tabindex="-1"
                aria-labelledby="exampleModalLabel${project.com_id}"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel${project.com_id}">
                        Editar Comerciante
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form
                        action="http://localhost:3000/api/v1/projects/"
                        id="formulario${project.com_id}"
                      >
                        <div class="mb-3">
                          <label for="tip_ide_id" class="form-label"
                            >Tipo de Identificación:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="tip_ide_id${project.com_id}"
                            name="tip_ide_id"
                            value="${project.tip_ide_id}"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="com_cedula_ruc" class="form-label"
                            >Cedula o Ruc:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="com_cedula_ruc${project.com_id}"
                            name="com_cedula_ruc"
                            value="${project.com_cedula_ruc}"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="com_apellidos_razon_social" class="form-label"
                            >Apellidos:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="com_apellidos_razon_social${project.com_id}"
                            name="com_apellidos_razon_social"
                            value="${project.com_apellidos_razon_social}"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="com_nombres_representante_legal" class="form-label"
                            >Nombres:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="com_nombres_representante_legal${project.com_id}"
                            name="com_nombres_representante_legal"
                            value="${project.com_nombres_representante_legal}"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="com_fecha_nacimiento" class="form-label"
                            >Fecha de Nacimiento:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="com_fecha_nacimiento${project.com_id}"
                            name="com_fecha_nacimiento"
                            value="${project.com_fecha_nacimiento}"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="com_edad" class="form-label">Edad: </label>
                          <input
                            type="text"
                            class="form-control"
                            id="com_edad${project.com_id}"
                            name="com_edad"
                            value="${project.com_edad}"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="com_lugar_origen" class="form-label"
                            >Lugar de Origen:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="com_lugar_origen${project.com_id}"
                            name="com_lugar_origen"
                            value="${project.com_lugar_origen}"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="com_telefono_convencional" class="form-label"
                            >Telefono Convencional:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="com_telefono_convencional${project.com_id}"
                            name="com_telefono_convencional"
                            value="${project.com_telefono_convencional}"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="com_telefono_celular" class="form-label"
                            >Telefono Celular:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="com_telefono_celular${project.com_id}"
                            name="com_telefono_celular"
                            value="${project.com_telefono_celular}"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="com_direccion_domicilio" class="form-label"
                            >Dirección Domicilio:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="com_direccion_domicilio${project.com_id}"
                            name="com_direccion_domicilio"
                            value="${project.com_direccion_domicilio}"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="com_ciudad" class="form-label">Ciudad: </label>
                          <input
                            type="text"
                            class="form-control"
                            id="com_ciudad${project.com_id}"
                            name="com_ciudad"
                            value="${project.com_ciudad}"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="com_provincia" class="form-label"
                            >Provincia:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="com_provincia${project.com_id}"
                            name="com_provincia"
                            value="${project.com_provincia}"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="com_mail" class="form-label">Email: </label>
                          <input
                            type="text"
                            class="form-control"
                            id="com_mail${project.com_id}"
                            name="com_mail"
                            value="${project.com_mail}"
                          />
                        </div>
          
                        <button type="submit" onclick="editFor(${project.com_id})" class="btn btn-primary">Edit</button>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          `;
        });
      }
    });
};

const editFor = (id) => {
  document.querySelector(`#formulario${id}`).addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
      tip_ide_id: document.querySelector("#tip_ide_id" + id).value,
      com_cedula_ruc: document.querySelector("#com_cedula_ruc" + id).value,
      com_apellidos_razon_social: document.querySelector(
        "#com_apellidos_razon_social" + id
      ).value,
      com_nombres_representante_legal: document.querySelector(
        "#com_nombres_representante_legal" + id
      ).value,
      com_fecha_nacimiento: document.querySelector("#com_fecha_nacimiento" + id).value,
      com_edad: document.querySelector("#com_edad" + id).value,
      com_lugar_origen: document.querySelector("#com_lugar_origen" +id).value,
      com_telefono_convencional: document.querySelector(
        "#com_telefono_convencional" + id
      ).value,
      com_telefono_celular: document.querySelector("#com_telefono_celular" + id).value,
      com_direccion_domicilio: document.querySelector("#com_direccion_domicilio" + id)
        .value,
      com_ciudad: document.querySelector("#com_ciudad" + id).value,
      com_provincia: document.querySelector("#com_provincia" + id).value,
      com_mail: document.querySelector("#com_mail" + id).value,
    };
    if (
      data.tip_ide_id == "" ||
      data.com_cedula_ruc == "" ||
      data.com_apellidos_razon_social == "" ||
      data.com_nombres_representante_legal == "" ||
      data.com_fecha_nacimiento == "" ||
      data.com_edad == "" ||
      data.com_lugar_origen == "" ||
      data.com_telefono_convencional == "" ||
      data.com_telefono_celular == "" ||
      data.com_direccion_domicilio == "" ||
      data.com_ciudad == "" ||
      data.com_provincia == "" ||
      data.com_mail == ""
    ) 
      {
        alert("Todos los campos son obligatorios");
        return;
      
    } else {
      fetch(`http://localhost:3000/api/v1/projects/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Se ha editado correctamente");
          window.location.reload();
        });
    }
  });

};
