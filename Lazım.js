/[**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLocaleUpperCase[$month];January;Ocak];Febuary;Şubat];March;Mart];April;Nisan];May;Mayıs];June;Haziran];July;Temmuz];August;Ağustos];September;Eylül];October;Ekim];November;Kasım];December;Aralık]** Ayında Toplam **$getGuildVar[oy5sayı]** Oy Verildi.](https://discord.gg/xdCRnsCebk) 
////////


$if[$guildIcon[$guildID]==]
$author[1;$guildName[$guildID]]
$else
$author[$guildName[$guildID];$guildIcon[$guildID]]
$endif
$title[Oy Sıralaması]
$description[[**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLocaleUpperCase[$month];January;Ocak];Febuary;Şubat];March;Mart];April;Nisan];May;Mayıs];June;Haziran];July;Temmuz];August;Ağustos];September;Eylül];October;Ekim];November;Kasım];December;Aralık]** Ayında Toplam **$getGuildVar[oy5sayı]** Oy Verildi.](https://discord.gg/xdCRnsCebk)  
$if[$userLeaderBoard[$guildID;ençokoyveren;desc;#{top}. {tag} - {value};10;1]==]
$else
\`\`\`js
$userLeaderBoard[$guildID;ençokoyveren;desc;#{top}. {tag} - {value};10;1]
\`\`\`
$endif
]
$footer[$guildName[$guildID] | Oy Verme Sistemi]
$addButton[1;Yorum Yap;secondary;yorumyapma;false;<:icons8comments100:1185679820500258909>]
$addButton[1;Oy Ver;success;oyverme;false;<a:verified:1185678824181092434>]

$onlyPerms[manageguild;:x: **BU komutu kullana bilmek için \`Yönetici\` yetkisine sahip olmalısın.**]















{

      name: "oyver-modal",
      type: "interaction",
      $if: "old",
      prototype: "modal",
      code: `

  $if[$textInputValue[GirdiğiKod]==$getUserVar[seçilen_oy_kodu;$authorID;$guildID]]
$interactionFollowUp[**Oy verdin.**;true;false]
  $interactionUpdate[

  {newEmbed: 
  {author:$guildName[$guildID]:$guildIcon[$guildID]}
  {description:
  [**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLocaleUpperCase[$month];January;Ocak];Febuary;Şubat];March;Mart];April;Nisan];May;Mayıs];June;Haziran];July;Temmuz];August;Ağustos];September;Eylül];October;Ekim];November;Kasım];December;Aralık]** Ayında Toplam **$getGuildVar[oy5sayı]** Oy Verildi.](https\://discord.gg/xdCRnsCebk)
\`\`\`js
$userLeaderBoard[$guildID;ençokoyveren;desc;#{top}. {tag} - {value};10;1]
\`\`\`
}
  {footer:$username en son oy verdi:$authorAvatar}
  }
  {actionRow:
  {button:Oy Ver:success:oyverme:false}
  {button:Yorum Yap:secondary:yorumyapma:false}  
  }
  ]

  $setUserVar[ençokoyveren;$sum[$getUserVar[ençokoyveren;$authorID];1];$authorID;$guildID]
  $setGuildVar[oy5sayı;$sum[$getGuildVar[oy5sayı;$guildID];1];$guildID]

  $setUserVar[bs;$sum[$datestamp;30000]]


  $else
  $interactionReply[**Hatalı Kod Girdiniz, Lütfen Tekrar Deneyin.**;everyone;true]
  $endif

  $onlyIf[$getUserVar[bs]<=$datestamp; <t:$truncate[$divide[$getUserVar[bs];1000]]:F> **Tarihinde Tekrar Deneyin.**{ephemeral} {interaction}]
    `,
    },




    +eval $createApplicationCommand[$guildID;bump;Sunucuyu öne çıkarır.;true;true;slash]





