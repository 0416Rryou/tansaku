$('#slider').slick({
    // アクセシビリティ。左右ボタンで画像の切り替えをできるかどうか
    accessibility: true,
    // 自動再生。trueで自動再生される。
    autoplay: true,
    // 自動再生で切り替えをする時間
    autoplaySpeed: 3000,
    // 自動再生や左右の矢印でスライドするスピード
    speed: 1000,
    // 自動再生時にスライドのエリアにマウスオンで一時停止するかどうか
    pauseOnHover: true,
    // 自動再生時にドットにマウスオンで一時停止するかどうか
    pauseOnDotsHover: false,
    // 切り替えのアニメーション。ease,linear,ease-in,ease-out,ease-in-out
    cssEase: 'ease',
    // 画像下のドット（ページ送り）を表示
    dots: true,
    // ドラッグができるかどうか
    draggable: true,
    // 切り替え時のフェードイン設定。trueでon
    fade: false,
    // 左右の次へ、前へボタンを表示するかどうか
    arrows: true,
    // 無限スクロールにするかどうか。最後の画像の次は最初の画像が表示される。
    infinite: true,
    // 最初のスライダーの位置
    initialSlide: 0,
    // 画像の遅延表示。‘ondemand’or'progressive'
    lazyLoad: 'ondemand',
    // スライドのエリアにマウスオーバーしている間、自動再生を止めるかどうか。
    pauseOnHover: true,
    // 一度にスライドする数
    slidesToScroll: 1,
    // タッチスワイプに対応するかどうか
    swipe: true,
    // 縦方向へのスライド
    vertical: false,
    //センターモード
    centerMode: false,
    slidesToShow: 1,
    centerPadding: 0,
    //サムネイルスライダー→自分でコード検索してください
    //ズームしながらスライダー→自分でコード検索してください
  });