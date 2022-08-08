/**
 * Cette function récupère la réponse d'une request pour la formater à notre bon vouloir
 *
 * @param responseApi
 */
export default function formatterApiToCategories(responseApi) {
    return responseApi.map(
        r => ({
            id: r.category_id,
            name: r.category_name,
        })
    )
}
