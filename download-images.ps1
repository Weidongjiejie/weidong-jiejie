$urls = @(
    @{url='https://sns-webpic-qc.xhscdn.com/202603050931/9489f104ecc903caa60560b008306a37/spectrum/1040g34o31lf5l55i4q0g49cp46n476p18q58k0o!nc_n_nwebp_mw_1';name='note1'},
    @{url='https://sns-webpic-qc.xhscdn.com/202603050931/a61835d01148888bfaa4f39ab97174ef/1040g2sg31kud1hh3327g49cp46n476p1k0g2ddg!nc_n_nwebp_mw_1';name='note2'},
    @{url='https://sns-webpic-qc.xhscdn.com/202603050931/f30550660ede0341a78de9d120e78762/spectrum/1040g34o31qk66b8m720049cp46n476p13s4vqoo!nc_n_nwebp_mw_1';name='note3'},
    @{url='https://sns-webpic-qc.xhscdn.com/202603050931/5c3e5b68e04ac6c1a376bd83e71c606c/spectrum/1040g0k031pen0p1ui40049cp46n476p19u48t58!nc_n_nwebp_mw_1';name='note4'},
    @{url='https://sns-webpic-qc.xhscdn.com/202603050931/06880ad762fb3e72277ab5265ccbcd92/spectrum/1040g0k031qtaa3trmu0049cp46n476p1fhvcsug!nc_n_nwebp_mw_1';name='note5'},
    @{url='https://sns-webpic-qc.xhscdn.com/202603050931/8f0e02bfaaa29dfa7397d9c640a3aa63/spectrum/1040g0k031pnndjgo540049cp46n476p13uuhg18!nc_n_nwebp_mw_1';name='note6'},
    @{url='https://sns-webpic-qc.xhscdn.com/202603050931/c941e473825760ea8fca63c60d8fd510/spectrum/1040g0k031nti972ckq0049cp46n476p1aaisig8!nc_n_nwebp_mw_1';name='note7'},
    @{url='https://sns-webpic-qc.xhscdn.com/202603050931/e922368993adc0c74fadcb4b443642fe/spectrum/1040g34o31n6nc7lul23049cp46n476p1v4tmfbg!nc_n_nwebp_mw_1';name='note8'},
    @{url='https://sns-webpic-qc.xhscdn.com/202603050931/f7194c029cd7a7afb3408211cc39082d/1040g2sg31mlulgbe6g7049cp46n476p19nurafo!nc_n_nwebp_mw_1';name='note9'},
    @{url='https://sns-webpic-qc.xhscdn.com/202603050931/137b16ce3d56211e0f72ccf7cbd47df3/spectrum/1040g34o31smtmmfh5e2g49cp46n476p1v44lap0!nc_n_nwebp_mw_1';name='note10'},
    @{url='https://sns-webpic-qc.xhscdn.com/202603050931/40fdb2484fe3a2a17e7fc88f50e3dcc5/notes_pre_post/1040g3k031rkimk1m2s0049cp46n476p10e55q98!nc_n_nwebp_mw_1';name='note11'},
    @{url='https://sns-webpic-qc.xhscdn.com/202603050931/f2d6963591d34a5555e22c7c76447580/notes_pre_post/1040g3k831r778j1e7g7049cp46n476p1a60920g!nc_n_nwebp_mw_1';name='note12'},
    @{url='https://sns-webpic-qc.xhscdn.com/202603050931/73dc1498f22c3ec11c35907268f39f10/1040g00831r4dsoutnu2049cp46n476p19mv0fo0!nc_n_nwebp_mw_1';name='note13'},
    @{url='https://sns-webpic-qc.xhscdn.com/202603050931/2348352494acf98d067f0a8a8f9a4323/spectrum/1040g34o31r3onnj6703049cp46n476p1nq29vh0!nc_n_nwebp_mw_1';name='note14'},
    @{url='https://sns-webpic-qc.xhscdn.com/202603050931/cb03b8789cc9a7bdeffd75a34f2b78d9/notes_pre_post/1040g3k831qc5k9ud7o7049cp46n476p11014vk0!nc_n_nwebp_mw_1';name='note15'}
)
foreach ($item in $urls) {
    Write-Host "Downloading $($item.name)..."
    Invoke-WebRequest -Uri $item.url -OutFile "C:\weidong-jiejie\images\$($item.name).webp"
}
Write-Host "All done!"
