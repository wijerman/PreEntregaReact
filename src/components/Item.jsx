const Item = ({item}) => {
    return (
        <div class="card">
         <img src="{item.imagen}" class="img-fluid" alt="{item.nombre}"/>
         <div class="card-body">
    <p class="card-text text uppercase">{item.nombre}.</p>
    <p class="card-text">{item.precio}</p>
  </div>
</div>

    )
}

export default Item;