
$(document).ready(function() {
	// For issue detail page
	$('.ui.items .item .content .extra .primary.button').click(function () {
		var name = $(this).data('name');
		$('.ui.issue_action.comment.form input[name="issue"]').val(name);
		$('.ui.issue_action.comment.form input[name="action"]').val("Closed");
		$('.ui.issue_action.modal .header').html('{{_("Issue fixed")}}');
		$('.ui.issue_action.modal')
			.modal({
				closable: true
			})
			.modal('show')
		;
	});
	$('.ui.items .item .content .extra .cancel.button').click(function () {
		var name = $(this).data('name');
		$('.ui.issue_action.comment.form input[name="issue"]').val(name);
		$('.ui.issue_action.comment.form input[name="action"]').val("Invalid");
		$('.ui.issue_action.modal .header').html('{{_("Invalid issue")}}');
		$('.ui.issue_action.modal')
			.modal({
				closable: true
			})
			.modal('show')
		;
	});
});

