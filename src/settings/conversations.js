export const conversations = [
  {
    id: 'hello',
    actions: [
      {
        human: false,
        type: 'message',
        options: {
          content: 'チャチャットによって最適化されたフォームでCVRを爆上げ！'
        }
      },
      {
        human: false,
        type: 'message',
        options: {
          content: 'ただま今より、ECサイトへの導入サンプルを開始します。メッセージにしたがってお楽しみください。(※ご入力いただいた情報は送信されませんのでご安心ください。)'
        }
      },
      {
        human: false,
        type: 'message',
        options: {
          delay: 1800,
          content: 'いらっしゃいませ！案内にしたがってお手続きください。'
        }
      },
      {
        human: false,
        type: 'message',
        options: {
          delay: 1000,
          content: 'ご購入完了まで、私がお手伝いさせていただきます。'
        }
      },
      {
        human: false,
        type: 'message',
        options: {
          delay: 1000,
          content: '入力はたった90秒で完了です！'
        }
      }
    ]
  },
  {
    id: 'userInfo-gender',
    trigger: 'hello',
    countable: true,
    actions: [
      {
        human: false,
        type: 'message',
        options: {
          content: 'まずはあなたの性別を選択してください。'
        }
      },
      {
        human: true,
        type: 'component',
        options: {
          content: 'FormCustomRadioGroup',
          props: {
            name: 'gender',
            choices: {
              '1': '男性', '2': '女性'
            }
          }
        }
      }
    ]
  },
  {
    id: 'userInfo-name',
    trigger: 'userInfo-gender',
    countable: true,
    actions: [
      {
        human: false,
        type: 'message',
        options: {
          content: 'お名前を教えて下さい。'
        }
      },
      {
        human: true,
        type: 'component',
        options: {
          content: 'FormName'
        }
      }
    ]
  },
  {
    id: 'userInfo-address',
    trigger: 'userInfo-name',
    countable: true,
    actions: [
      {
        human: false,
        type: 'message',
        options: {
          content: '次にご住所をお願いします。'
        }
      },
      {
        human: true,
        type: 'component',
        options: {
          content: 'FormAddress'
        }
      }
    ]
  },
  {
    id: 'userInfo-email',
    trigger: 'userInfo-address',
    countable: true,
    actions: [
      {
        human: false,
        type: 'message',
        options: {
          content: 'メールアドレスをお願いします。'
        }
      },
      {
        human: true,
        type: 'component',
        options: {
          content: 'FormEmail'
        }
      }
    ]
  },
  {
    id: 'userInfo-tel',
    trigger: 'userInfo-email',
    countable: true,
    actions: [
      {
        human: false,
        type: 'message',
        options: {
          content: '商品のお届けの事でご連絡する場合がありますので、繋がる電話番号をお願いします。'
        }
      },
      {
        human: true,
        type: 'component',
        options: {
          content: 'FormTel'
        }
      }
    ]
  },
  {
    id: 'userInfo-birthday',
    trigger: 'userInfo-tel',
    countable: true,
    actions: [
      {
        human: false,
        type: 'message',
        options: {
          content: '生年月日を教えてください。'
        }
      },
      {
        human: true,
        type: 'component',
        options: {
          content: 'FormBirthDay'
        }
      }
    ]
  },
  {
    id: 'userInfo-mailmagazine',
    trigger: 'userInfo-birthday',
    countable: true,
    actions: [
      {
        human: false,
        type: 'message',
        options: {
          content: 'お得情報などが届くメールマガジンに登録しますか？'
        }
      },
      {
        human: true,
        type: 'component',
        options: {
          content: 'FormCustomRadioGroup',
          props: {
            name: 'mailmagazine',
            choices: { 'true': '登録する', 'false': '登録しない' }
          }
        }
      }
    ]
  },
  {
    id: 'goodBey',
    trigger: 'userInfo-mailmagazine',
    actions: [
      {
        human: false,
        type: 'message',
        options: {
          delay: 3000,
          content: 'いかがでしたでしょうか？'
        }
      },
      {
        human: false,
        type: 'message',
        options: {
          delay: 1000,
          content: 'もしご興味がございましたら、ページ下部のフォームよりお問い合わせください。'
        }
      },
    ]
  },
];
