const xpr_objects = require("/xpr/request");

exports.process = function(context, options) {
    let request = xpr_objects.XprRequest();
    let api = xpr_objects.XprApi;    

    var playlists = api({
        uri: "/playlists/",
        method: "GET",
        params: {
            with: "CustomFields,PlaylistItems(Article(Categories,CustomFields,Language,Picture))",
            related_Section_Id__eq: request.section.Id,
            order_field: "SortOrder",
            order_Playlist_PlaylistItems_fields: "SortOrder",
            order_dir: "asc",
            Locale__eq: request.language.Locale,
            per_page: "all"
        }
    });
    
    // only show published articles 
    //playlists = _.each(playlists, function(playlist) {
    //    _.each(playlist._embedded.PlaylistItems, function(article) {
    //        if (!article._embedded.Article.Active) article._embedded.Article = {};  
    //    });
    //});
     
    return playlists;
}