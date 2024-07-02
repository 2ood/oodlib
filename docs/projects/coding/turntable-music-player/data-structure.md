# data structure

1. 음반장 `drawer`
* 음반을 swipe 로 traverse 할 수 있게 애니메이션. 
* 음반, 
* 정렬/재정렬 기능.
* 무한 스크롤 기능.
```json
{
    "drawer_id":"sdfsdf", // list id, uuid
    "total_albums" : 20, // size of the total tracks
    "slice_index" : 0, // sliced index of total drawer 
    "contents" : [
        {},{},{}
    ] //array(albums)
}
```

2. 음반 `album`
* 음반의 역사. 음반의 평가. 
* 수록 트랙.
```json
{
    "album_id" : "sdfsd-sdfsdf-sdfsdf-sdfs", //album id, uuid
    "album_title" : "Every letter I sent you.", // album title, char(256)
    "tracks" : [
        {}
    ], //array(tracks) 
    "spotify_album_id" : "4aawyAB9vmqN3uQ7FjRGTy", //string
}
```

3. 음악 `piece`
* 작곡가가 의도한 설계. (예 : Autumn Leaves)
* 악보/ 리딩시트/ 곡 정보 등.
```json
{
    "piece_id" : "sdfasdf",

}
```

3. 트랙 `track`
* 음악을 여러 음악가들이 참여해 음원으로 녹음/믹스한 단위.
* 트랙 제작 참여자, 장르, 가사, 별점평 
* 버전 선택(공연 / 사클 / 다른 음악가의 커버)
* 발매/미발매

```json
{
    "track_id" : "입춘", //primary
    "owner": {
        "musician_id" : "asdfasdfa",
        "name" : "한로로",
    },
    "release_status" : "unreleased",
    "piece_id" : "asdfasdfasdf",
    "genre" : "asdfasd",
    "credits" : {
        "composer" : {
            "musician_id" : "asdfasdf",
            "name" : "asdfadsf",
        },
        "guitar" : {
            "musician_id" : "asdfasdfa",
            "name" : "asdfadfs",
        },
    },
    "available_on" : [],
}
```

4. 음악가 `musician`
* 참여한 음반, 공연

```json
{
    "musician_id" : "asdfasdfa",
    "name" : "적재",
    "genre" : ["rock","jazz","ballade"],
    "job" : ["singer-songwriter","guitarist"],
    "desc_href" : "asdfasdf" // markdown viewer
}
```

5. 음악그룹
* 소속 음악가

6. 음악 검색 기능
* spotify 검색
