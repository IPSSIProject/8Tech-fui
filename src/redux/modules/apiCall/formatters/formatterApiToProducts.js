/**
 * Cette function récupère la réponse d'une request pour la formater à notre bon vouloir
 * ici on récupère category et subcategory pas en tant qu'objet donc on les construit
 *
 * @param responseApi
 */
export default function formatterApiToProducts (responseApi) {
    return responseApi.map(
        r => ({
            id: r.id,
            name: r.name,
            category: {
                id: r.category_id,
                name: r.category_name,
            },
            subcategory: {
                subcategory_id: r.subcategory_id,
                subcategory_name: r.subcategory_name,
            },
            brand: r.brand,
            price: r.price,
            quantity: r.quantity,
            new: r.new,
            promotion: r.promotion,
            image: r.image,
        })
    )
}
